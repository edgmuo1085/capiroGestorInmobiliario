import { LoginService } from './../../Services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formRegistro!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.formRegistro = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      identificacion: ['', Validators.required],
      tipoIdentificacion: ['CC', Validators.required],
      password: ['', Validators.required],
    });
  }

  registrar() {
    if (this.formRegistro.valid) {
      this.loginService.registrarUsuario(this.formRegistro.value).subscribe(resp => {
        console.log(resp);
      });
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Su cuenta fue creada de forma exitosa ',
        confirmButtonText: 'Aceptar',
      }).then(result => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('home');
        }
      });
      console.log(this.formRegistro.value);
    } else {
      Swal.fire({
        icon: 'info',
        text: 'Para realizar el registro es necesario ingresar todos los campos.',
      });
    }
  }
}
