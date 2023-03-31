import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';

@Component({
  selector: 'app-bienes-arrendar',
  templateUrl: './bienes-arrendar.component.html',
  styleUrls: ['./bienes-arrendar.component.scss'],
})
export class BienesArrendarComponent implements OnInit {
  isLogging: string = '';

  constructor(private router: Router, private dataUserService: DataUserService) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
  }

  ngOnInit(): void {}

  prevPage() {
    this.router.navigate(['/arrendamiento' + this.isLogging + '/referencias']);
  }

  enviarFormulario() {
    console.log('guardar formulario');
  }
}
