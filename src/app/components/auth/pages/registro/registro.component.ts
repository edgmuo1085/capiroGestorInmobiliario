import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/shared/shared-services/login.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  formRegistro!: FormGroup;
  loading: boolean = false;
  eye: boolean = true;
  tipoInput: string = 'password';

  tiposIdentificacion: any[] = [
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
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      identificacion: ['', Validators.required],
      tipoIdentificacion: ['CC', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  mostrarPass() {
    this.eye = false;
    this.tipoInput = 'text';
  }

  ocultarPass() {
    this.eye = true;
    this.tipoInput = 'password';
  }

  registrar() {
    if (this.formRegistro.invalid) {
      this.toastCustomService.showToas('Advertencia', 'Debe digitar todos los campos', 'error');
      return;
    }
    this.loading = true;
    let usuarioCreacion = this.formRegistro.value;
    let json = JSON.stringify(usuarioCreacion);

    this.loginService.registrarUsuario(json).subscribe({
      next: response => {
        console.log(response);
        if (!response.idUsuario) {
          this.loading = false;
          this.toastCustomService.showToas(
            'Advertencia',
            'Ocurrió un error al momento de registrar el usuario, inténtelo más tarde',
            'warn'
          );
          return;
        }
        this.loading = false;
        this.toastCustomService.showToas('Información', 'Usuario registrado con éxito');
        this.formRegistro.reset();
        this.router.navigate(['/page/home']);
      },
      error: err => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  get formCtrlR() {
    return this.formRegistro.controls;
  }
}
