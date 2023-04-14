import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { Inmueble, InmuebleModel, InmuebleRegistro, InmuebleRegistroModel } from 'src/app/components/interfaces/inmueble.interface';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-inmueble-registrar',
  templateUrl: './inmueble-registrar.component.html',
  styleUrls: ['./inmueble-registrar.component.scss'],
})
export class InmuebleRegistrarComponent implements OnInit {
  actualizarInmueble: boolean = false;
  cargarImagenes: boolean = false;
  formRegistroInmueble: FormGroup = new FormGroup({});
  idUsuario: number = 0;
  idInmueble: number = 0;
  idInmuebleUpdate: number = 0;
  msgTituloPage: string = 'Registrar Inmueble';

  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  listaHabitaciones: ParametrosShared[] = environment.listaHabitaciones;
  listaEstratos: ParametrosShared[] = environment.listaEstratos;
  listaBanios: ParametrosShared[] = environment.listaBanios;
  listaEleccionSiNo: ParametrosShared[] = environment.listaEleccionSiNo;
  estadoInmueble: ParametrosShared[] = environment.estadoInmueble;
  tipoPublicacion: ParametrosShared[] = environment.tipoPublicacion;
  tipoConstruccion: ParametrosShared[] = environment.tipoConstruccion;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private propiedadesService: PropiedadesService,
    private dataUserService: DataUserService,
    private toastCustomService: ToastCustomService
  ) {
    this.dataUserService.getUserData().subscribe(response => {
      this.idUsuario = response.idUsuario;
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['idInmueble']) {
        this.idInmuebleUpdate = params['idInmueble'];
        this.actualizarInmueble = true;
        this.msgTituloPage = 'Actualizar Inmueble';
        this.consultarInmueble(this.idInmuebleUpdate);
      }
    });
  }

  ngOnInit(): void {
    this.formRegistroInmueble = this.fb.group({
      isInvalidForm: false,
      tipoInmueble: ['', [Validators.required]],
      area: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(environment.soloNumeros)]],
      habitacion: ['', [Validators.required]],
      estrato: ['', [Validators.required]],
      banos: ['', [Validators.required]],
      garage: ['', [Validators.required]],
      estadoInmueble: ['', [Validators.required]],
      tiempo: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      precio: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      tipoPublicacion: ['', [Validators.required]],
      tipoConstruccion: ['', [Validators.required]],
    });
  }

  registrarActualizarInmueble() {
    if (this.actualizarInmueble) {
      this.onSubmitActualizarInmueble();
      return;
    }

    this.onSubmitRegistrarInmueble();
  }

  onSubmitRegistrarInmueble() {
    if (this.formRegistroInmueble.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }

    let registroInmueble: InmuebleRegistro = new InmuebleRegistroModel(
      this.formRegistroInmueble.get('tipoInmueble')?.value,
      this.formRegistroInmueble.get('area')?.value,
      this.formRegistroInmueble.get('habitacion')?.value,
      this.formRegistroInmueble.get('estrato')?.value,
      this.formRegistroInmueble.get('banos')?.value,
      this.formRegistroInmueble.get('garage')?.value,
      this.formRegistroInmueble.get('estadoInmueble')?.value,
      this.formRegistroInmueble.get('tiempo')?.value,
      this.formRegistroInmueble.get('precio')?.value,
      this.formRegistroInmueble.get('tipoPublicacion')?.value,
      this.formRegistroInmueble.get('tipoConstruccion')?.value,
      this.idUsuario
    );
    this.propiedadesService.crearInmueble(registroInmueble).subscribe({
      next: response => {
        if (!response.id) {
          this.toastCustomService.showToast(
            'Advertencia',
            'Ocurrió un error al momento de registrar el inmueble, inténtelo más tarde',
            'warn'
          );
          return;
        }
        this.toastCustomService.showToast(
          'Información',
          'Propiedad registrada con éxito. Puede continuar anexando las imágenes al inmueble.'
        );
        this.formRegistroInmueble.reset();
        this.idInmueble = response.id;
        this.cargarImagenes = true;
        this.msgTituloPage = 'Anexar imágenes al inmueble';
      },
      error: err => {
        console.error(err);
      },
    });
  }

  onSubmitActualizarInmueble() {
    if (this.formRegistroInmueble.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }

    let actualizarInmuebleData: Inmueble = new InmuebleModel(
      this.formRegistroInmueble.get('tipoInmueble')?.value,
      this.formRegistroInmueble.get('area')?.value,
      this.formRegistroInmueble.get('habitacion')?.value,
      this.formRegistroInmueble.get('estrato')?.value,
      this.formRegistroInmueble.get('banos')?.value,
      this.formRegistroInmueble.get('garage')?.value,
      this.formRegistroInmueble.get('estadoInmueble')?.value,
      this.formRegistroInmueble.get('tiempo')?.value,
      this.formRegistroInmueble.get('precio')?.value,
      this.formRegistroInmueble.get('tipoPublicacion')?.value,
      this.formRegistroInmueble.get('tipoConstruccion')?.value,
      this.idUsuario,
      +this.idInmuebleUpdate
    );
    this.propiedadesService.crearInmueble(actualizarInmuebleData).subscribe({
      next: response => {
        if (!response.id) {
          this.toastCustomService.showToast(
            'Advertencia',
            'Ocurrió un error al momento de registrar el inmueble, inténtelo más tarde',
            'warn'
          );
          return;
        }
        this.toastCustomService.showToast(
          'Información',
          'Propiedad registrada con éxito. Puede continuar anexando las imágenes al inmueble.'
        );
        this.formRegistroInmueble.reset();
        this.router.navigate(['/inmuebles/sesion/listar']);
      },
      error: err => {
        console.error(err);
      },
    });
  }

  consultarInmueble(idInmueble: number) {
    this.propiedadesService.getInmuebleOne(idInmueble).subscribe({
      next: response => {
        if (!response.id) {
          return;
        }
        this.formRegistroInmueble.patchValue({
          tipoInmueble: response.tipoInmueble,
          area: response.area,
          habitacion: response.habitacion,
          estrato: response.estrato,
          banos: response.banos,
          garage: response.garage,
          estadoInmueble: response.estado,
          tiempo: response.tiempo,
          precio: response.precio,
          tipoPublicacion: response.tipoPublicacion,
          tipoConstruccion: response.tipoCons,
        });
      },
      error: err => {
        console.error(err);
      },
    });
  }
}
