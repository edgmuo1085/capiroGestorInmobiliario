import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  msg: boolean = false;
  eye: boolean = true;
  tipoInput: string = 'password';

  constructor(private fb: FormBuilder, private service: LoginService, private ro: Router, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      // recordar: [false],
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
    console.log(this.loginForm.value);
    let correo = this.loginForm.value.usuario;
    let contra = this.loginForm.value.contrasena;
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'error',
        text: 'Ingrese por favor ambos campos!',
      });
    }
    this.service.login(correo, contra).subscribe(resp => {
      console.log(resp);
      if (resp === null) {
        Swal.fire({
          icon: 'info',
          title: 'Usuario o contraseña incorrectos',
          text: 'Si no tiene una cuenta por favor regístrese!',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Registrarse',
        }).then(result => {
          if (result.isConfirmed) {
            this.ro.navigateByUrl('registro');
          }
        });
      }
    });
  }
}
