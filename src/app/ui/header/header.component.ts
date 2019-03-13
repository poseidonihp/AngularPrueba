import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { GitHubService } from 'src/app/service/github.service';
import { RegisterComponent } from '../form-register/form-register.component';
import { DebugContext } from '@angular/core/src/view';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
//   styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  nombres:string ;
  apellidos: string ;
  cedula : string;
  fecha : string ;
  github : string ;
  email : string ;
  ver : boolean = false ;
  @Input() set  nombre (nombre : any ){
    if (nombre != undefined){
      debugger;
      this.ver = true ;
      this.nombres = nombre.nombre == "undefined" ? 'Sin definir' : nombre.nombre;
      this.apellidos = nombre.apellidos  == "undefined" ? '' : nombre.apellidos;
      this.cedula = nombre.cedula  == "undefined" ? 'Sin definir' : nombre.cedula;
      this.fecha = nombre.fecha == "undefined" ? 'Sin definir' : nombre.fecha;
      this.email = nombre.email == "undefined" ? 'Sin definir' : nombre.email;
      this.github = nombre.github == "undefined" ? 'Sin definir' : nombre.github;
    }
   
  }


  constructor(private githubservice : GitHubService) { }


  ngOnInit() {
   
    this.Borrar();
  }

  Borrar(){
    this.ver = false;
    this.githubservice.BorrarCokie();
  }
 

}
