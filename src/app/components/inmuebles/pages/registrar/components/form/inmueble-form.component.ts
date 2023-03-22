import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, ReplaySubject } from 'rxjs';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { Inmueble, InmuebleModel } from 'src/app/components/interfaces/inmueble.interface';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';
import { IdGenerateService } from 'src/app/components/shared/shared-services/id-generate.service';
import { ArchivoInmueble } from 'src/app/components/interfaces/archivo-inmueble.interface';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

@Component({
  selector: 'app-inmueble-form',
  templateUrl: './inmueble-form.component.html',
  styleUrls: ['./inmueble-form.component.scss'],
})
export class InmuebleFormComponent implements OnInit {
  cargarImagenes: boolean = false;
  formRegistroInmueble: FormGroup = new FormGroup({});
  idUsuario: number = 0;
  idInmueble: number = 0;
  multiple: boolean = true;
  msgTituloPage: string = 'Registra Inmueble';

  anexoImgInmuebles: ArchivoInmueble[] = [];
  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  garageSeleccion: ParametrosShared[] = environment.garageSeleccion;
  estadoInmueble: ParametrosShared[] = environment.estadoInmueble;
  tipoPublicacion: ParametrosShared[] = environment.tipoPublicacion;
  tipoConstruccion: ParametrosShared[] = environment.tipoConstruccion;
  base64Output!: string;
  loading: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private propiedadesService: PropiedadesService,
    private dataUserService: DataUserService,
    private toastCustomService: ToastCustomService,
    private idGenerateService: IdGenerateService
  ) {
    this.dataUserService.getUserData().subscribe(response => {
      this.idUsuario = response.idUsuario;
    });
  }

  ngOnInit(): void {
    this.formRegistroInmueble = this.fb.group({
      tipoInmueble: ['', Validators.required],
      area: ['', Validators.required],
      habitacion: ['', Validators.required],
      estrato: ['', Validators.required],
      banos: ['', Validators.required],
      garage: ['', Validators.required],
      estadoInmueble: ['', Validators.required],
      tiempo: ['', Validators.required],
      precio: ['', Validators.required],
      tipoPublicacion: ['', Validators.required],
      tipoConstruccion: ['', Validators.required],
    });
  }

  registrarInmueble() {
    if (this.formRegistroInmueble.invalid) {
      this.toastCustomService.showToas('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }

    let registroInmueble: Inmueble = new InmuebleModel(
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
      0
    );
    //console.log('registroInmueble: ', registroInmueble);
    this.propiedadesService.crearInmueble(registroInmueble).subscribe({
      next: response => {
        //console.log('response', response);
        if (!response.id) {
          this.toastCustomService.showToas(
            'Advertencia',
            'Ocurrió un error al momento de registrar el inmueble, inténtelo más tarde',
            'warn'
          );
          return;
        }
        this.toastCustomService.showToas(
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

  async subirImagenes(data: any) {
    //console.log(data);
    for await (const file of data.files) {
      let base = await this.onFileSelected(file);
      const idUnique = this.idGenerateService.generate();
      let filesNames = file.name.split('.');
      let extension = filesNames.at(-1);
      this.anexoImgInmuebles.push({
        nombreArchivo: `${idUnique}.${extension}`,
        formato: file.type,
        idUsuario: this.idUsuario,
        idInmueble: this.idInmueble,
        archivo: base,
      });
    }
    this.enviarDataImg();
    //console.log('Objeto imagen', this.anexoImgInmuebles);
  }

  async enviarDataImg() {
    for await (const iterator of this.anexoImgInmuebles) {
      this.propiedadesService.guardarFoto(iterator).subscribe(resp => {
        console.log('respuesta imagenes', resp);
      });
    }

    this.cargarImagenes = false;
    this.msgTituloPage = 'Registrar inmueble';
    this.toastCustomService.showToas('Información', 'Imágenes anexadas con éxtio.');
  }

  onFileSelected(event: any): Promise<string> {
    return new Promise(resolve => {
      this.convertFile(event).subscribe(base64 => {
        resolve(base64);
      });
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(window.btoa(event.target.result.toString()));
    return result;
  }

  get formCtrlI() {
    return this.formRegistroInmueble.controls;
  }
}
