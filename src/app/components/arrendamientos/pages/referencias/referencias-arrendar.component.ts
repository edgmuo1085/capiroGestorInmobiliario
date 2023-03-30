import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-referencias-arrendar',
  templateUrl: './referencias-arrendar.component.html',
  styleUrls: ['./referencias-arrendar.component.scss'],
})
export class ReferenciasArrendarComponent implements OnInit {
  formReferencias: FormGroup = new FormGroup({});
  tiposCuentasBancos: ParametrosShared[] = environment.tiposCuentasBancos;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formReferencias = this.fb.group({
      nombreRazon: ['', [Validators.required]],
      celularRefencia: ['', [Validators.required]],
      municipio: ['', [Validators.required]],

      nombresPersonalesUno: ['', [Validators.required]],
      celularPersonalesUno: ['', [Validators.required]],
      municipioPersonalesUno: ['', [Validators.required]],
      nombresPersonalesDos: ['', [Validators.required]],
      celularPersonalesDos: ['', [Validators.required]],
      municipioPersonalesDos: ['', [Validators.required]],

      nombresFamiliaresUno: ['', [Validators.required]],
      celularFamiliaresUno: ['', [Validators.required]],
      municipioFamiliaresUno: ['', [Validators.required]],
      nombresFamiliaresDos: ['', [Validators.required]],
      celularFamiliaresDos: ['', [Validators.required]],
      municipioFamiliaresDos: ['', [Validators.required]],

      tipoCuentaUno: ['', [Validators.required]],
      entidadFinancieraUno: ['', [Validators.required]],
      numCuentaUno: ['', [Validators.required]],
      tipoCuentaDos: ['', [Validators.required]],
      entidadFinancieraDos: ['', [Validators.required]],
      numCuentaDos: ['', [Validators.required]],
    });
  }

  guardarFormularioArrendamiento() {
    console.log('formReferencias ', this.formReferencias.value);
  }

  prevPage() {
    console.log('formReferencias ', this.formReferencias.value);
    this.router.navigate(['/arrendamiento/informacion-ocupacion']);
  }

  nextPage() {
    console.log('formReferencias ', this.formReferencias.value);
    this.router.navigate(['/arrendamiento/bienes']);
  }
}
