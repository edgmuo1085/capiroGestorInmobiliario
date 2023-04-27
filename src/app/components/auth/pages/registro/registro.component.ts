import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/shared/shared-services/login.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  formRegistro!: FormGroup;
  loading: boolean = false;
  tiposIdentificacion: ParametrosShared[] = [
    {
      value: 'CC',
      label: 'Cédula de ciudadanía',
    },
    {
      value: 'CE',
      label: 'Cédula de extranjería',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastCustomService: ToastCustomService
  ) {}

  ngOnInit(): void {
    this.formRegistro = this.fb.group({
      isInvalidForm: false,
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      identificacion: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      tipoIdentificacion: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registrar() {
    if (this.formRegistro.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }
    this.loading = true;
    let usuarioCreacion = this.formRegistro.value;
    let json = JSON.stringify(usuarioCreacion);

    this.loginService.registrarUsuario(json).subscribe({
      next: response => {
        if (!response.idUsuario) {
          this.loading = false;
          this.toastCustomService.showToast(
            'Advertencia',
            'Ocurrió un error al momento de registrar el usuario, inténtelo más tarde',
            'warn'
          );
          return;
        }
        this.loading = false;
        this.toastCustomService.showToast('Información', 'Usuario registrado con éxito');
        this.formRegistro.reset();
        this.router.navigate(['/page/home']);
      },
      error: err => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
