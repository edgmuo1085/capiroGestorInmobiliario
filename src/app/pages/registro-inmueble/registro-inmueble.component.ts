import { LoginService } from 'src/app/Services/login.service';
import { PropiedadesService } from './../../Services/propiedades.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {TranslateService} from "@ngx-translate/core";
import {PrimeNGConfig} from "primeng/api";
import Swal from 'sweetalert2'
import { Observable, ReplaySubject, Subject } from 'rxjs';



@Component({
  selector: 'app-registro-inmueble',
  templateUrl: './registro-inmueble.component.html',
  styleUrls: ['./registro-inmueble.component.css']
})

export class RegistroInmuebleComponent implements OnInit {

  cargarImagenes:boolean = false
  formRegistroInmueble!: FormGroup;
  idUsuario!:any;
  idInmueble!:any;
  multiple:boolean = true

  datos:any[] = [];
  base64Output!: string;
  tiposFormatos:any = {
    'image/jpeg': 'jpg',
    'image/jpg' : 'jpg',
    'image/png' : 'png'
  }

  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService,
               private router: Router, private fb: FormBuilder, private propiedadesService: PropiedadesService,
               private loginService: LoginService) { }

  ngOnInit(): void {
    this.translateChange('es');

    this.loginService.idUsuario.subscribe(id => {
      this.idUsuario = id
      //localStorage.setItem('id',this.idUsuario)
      console.log(id);
    })

    this.formRegistroInmueble = this.fb.group({
      tipoInmueble: ['', Validators.required],
      area: ['', Validators.required],
      habitacion: ['', Validators.required],
      estrato: ['', Validators.required],
      banos: ['', Validators.required],
      garage: ['', Validators.required],
      estado: ['', Validators.required],
      tiempo: ['', Validators.required],
      precio: ['', Validators.required],
      tipoPublicacion: ['', Validators.required],
      tipoCons: ['', Validators.required],
      idUsuario:[Number(localStorage.getItem('id'))]
    })

  }
   
  // traducir componentes primeNg
  translateChange(lang: string) {
    this.translateService.use(lang)
    this.translateService.get('primeng').subscribe((res) => this.primengConfig.setTranslation(res))
  }

  registrarInmueble(){
    if(this.formRegistroInmueble.valid){
      this.cargarImagenes = true;
      this.loginService.idUsuario.subscribe(id => {
        this.idUsuario = id;
      })
      let data = this.formRegistroInmueble.value;
      console.log('datos enviados',data);
      this.propiedadesService.crearInmueble(data).subscribe( resp => {
        console.log('creados',resp);
        this.idInmueble = resp.id;
      })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      })
    }
  }

  async SubirImagenes(data:any){
    console.log(data);
    
    for (const file of data.files) {
      let base = await this.onFileSelected(file)
      this.datos.push({
        nombreArchivo: file.name,
        formato: this.tiposFormatos[file.type.toString()],
        idInmueble: this.idInmueble,
        archivo: base
      })
    }
    this.enviarDataImg();
    console.log('Objeto imagen',this.datos);
    
  }

  enviarDataImg(){
    for (const iterator of this.datos) {
      this.propiedadesService.guardarFoto(iterator).subscribe(resp => {
        console.log('respuesta imagenes',resp);      
      })
    }
    Swal.fire({
      icon: 'success',
      text: 'Propiedad registrada con éxito',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('propiedades');
      }
    })
  }


   // *****************Base64********************************
   onFileSelected(event:any) {
    return new Promise((resolve) => {
      this.convertFile(event).subscribe((base64)=> {
        resolve(base64)
      })
    })
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event:any) => result.next(window.btoa(event.target.result.toString()));
    return result;
  }
  // *************************************************




}
