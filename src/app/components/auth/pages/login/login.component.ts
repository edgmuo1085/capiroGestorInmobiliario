import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataShared } from 'src/app/components/interfaces/response-login.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { LoginService } from 'src/app/components/shared/shared-services/login.service';
import { StorageLocalService } from 'src/app/components/shared/shared-services/storage-local.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  eye: boolean = true;
  tipoInput: string = 'password';

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router,
    private storageService: StorageLocalService,
    private dataUserService: DataUserService,
    private toastCustomService: ToastCustomService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
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

  login() {
    if (this.loginForm.invalid) {
      this.toastCustomService.showToas('Advertencia', 'Correo electrónico y contraseña requeridos', 'error');
      return;
    }
    this.loading = true;
    let correo = this.loginForm.value.correo;
    let contra = this.loginForm.value.contrasena;
    let data = { usuario: correo, password: contra };
    let json = JSON.stringify(data);

    this.service.login(json).subscribe({
      next: response => {
        if (!response.idUsuario) {
          this.loading = false;
          this.toastCustomService.showToas('Advertencia', 'Correo electrónico o contraseña incorrectos', 'warn');
          return;
        }

        let userData: UserDataShared = {
          idUsuario: response.idUsuario,
          nombres: response.nombres,
          apellidos: response.apellidos,
          correo: response.correo,
          identificacion: response.identificacion,
          tipoIdentificacion: response.tipoIdentificacion,
          estado: response.estado,
          tipoCuenta: response.tipoCuenta,
          token: '',
        };

        const base64User = window.btoa(JSON.stringify(userData));
        this.storageService.localSet(environment.storageKey.usuarioCapiro, base64User);
        this.storageService.localSet(environment.storageKey.tokenCapiro, response.token);
        this.dataUserService.setUserData(userData);
        this.dataUserService.setTokenLocal(response.token);
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.loading = false;
        console.error(err);
      },
    });
  }

  get formCtrlC() {
    return this.loginForm.controls;
  }
}
