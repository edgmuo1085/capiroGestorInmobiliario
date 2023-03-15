import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  display: boolean = false;
  verMenu: boolean = false;
  user:string = 'N';
  user2:string = "N";
  nombreUsuario!:string;
  nombreUsuario2!:string;
  dataObj!:any;

  menuItem = [
    {
      label: 'Inicio',
      link: 'home',
    },
    {
      label: 'Anuncie su inmueble',
      link: 'registroInmueble',
    },
    {
      label: 'Avalúos',
      link: 'avaluos',
    },
    {
      label: 'Hipotecas',
      link: 'hipotecas',
    },
    {
      label: 'Nosotros',
      link: 'nosotros',
    }
  ];

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginService.estado.subscribe( resp => {
      if(resp !== ''){
        this.user = resp;
        this.loginService.nombreUsuario.subscribe( resp => {
          this.nombreUsuario = resp;
        })
      } else {
        this.user = 'N';
      }
      console.log(resp);
    })

    const dataUser = JSON.parse(localStorage.getItem('dataUser') || '');
    console.log('localstarage', dataUser);
    
  }

  showDialog() {
    this.display = true;
  }

  getData() {
    this.dataObj = JSON.parse(localStorage.getItem('dataUser') || '{}') ;
    console.log(this.dataObj);
    this.user2 = this.dataObj.estado
    this.nombreUsuario2 = this.dataObj.nombres
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('dataUser')
    this.router.navigateByUrl('home');
    this.user2 = 'N';
  }


}