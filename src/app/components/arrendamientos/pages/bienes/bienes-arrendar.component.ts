import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienes-arrendar',
  templateUrl: './bienes-arrendar.component.html',
  styleUrls: ['./bienes-arrendar.component.scss'],
})
export class BienesArrendarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  prevPage() {
    this.router.navigate(['/arrendamiento/referencias']);
  }

  enviarFormulario() {
    console.log('guardar formulario');
  }
}
