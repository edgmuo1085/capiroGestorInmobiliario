import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaluos',
  templateUrl: './avaluos.component.html',
  styleUrls: ['./avaluos.component.css']
})
export class AvaluosComponent implements OnInit {
  
  display:boolean = false;
  formAvaluos!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAvaluos = this.fb.group({
      tipoInmueble: ['', Validators.required],
      estrato: ['', Validators.required],
      niveles: ['', Validators.required],
      habitaciones: ['', Validators.required],
      garaje: ['', Validators.required],
      banos: ['', Validators.required],
      tiempoConstruido: ['', Validators.required],
      tipoConstruccion: ['', Validators.required],
      ubicacion: ['', Validators.required],
      direccion: ['', Validators.required],

      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],

      certificadoLibertad: ['', Validators.required],
      escrituraPublica: ['', Validators.required],
      predial: ['', Validators.required],
      certificadoCatastral: ['', Validators.required],

    })
  }

  solicitarAvaluo(){
    if(this.formAvaluos.valid){
      console.log(this.formAvaluos.value);
    }
  }

  showDialog() {
    this.display = true;
  }

}
