import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'gestor';
  dataObj!: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataObj = JSON.parse(localStorage.getItem('dataUser') || '{}');
  }
}
