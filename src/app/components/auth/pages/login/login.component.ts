import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/components/shared/shared-services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  msg: boolean = false;
  loading: boolean = false;
  eye: boolean = true;
  tipoInput: string = 'password';

  constructor(private fb: FormBuilder, private service: LoginService, private router: Router, private messageService: MessageService) {}

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
      Swal.fire({
        icon: 'error',
        text: 'Ingrese por favor ambos campos!',
      });
      return;
    }
    this.loading = true;
    let correo = this.loginForm.value.correo;
    let contra = this.loginForm.value.contrasena;
    let data = { usuario: correo, password: contra };
    let json = JSON.stringify(data);

    this.service.login(json).subscribe({
      next: resp => {
        console.log(resp);
        this.loading = false;
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
