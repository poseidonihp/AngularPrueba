import { Component, OnInit, Output, EventEmitter, ViewChild, Input, HostListener } from '@angular/core';
import { GitHubService } from 'src/app/service/github.service';
import swal from 'sweetalert';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class RegisterComponent implements OnInit {


  @Output() toggle: EventEmitter<null> = new EventEmitter();

    nombres : string ;
    Apellidos: string;
    cedula:number;
    fecha : any ;
    email : string ;
    github : string ;
    Datos : any ;

    

  constructor(private githubservice : GitHubService) { }

  

  ngOnInit() {
  }
  set(){
    this.githubservice.GuardarCookie('nombre',this.nombres);
}

  Guardar(){

    this.Datos = [
      {'nombre' : 'nombre','valor' : this.nombres },
      {'nombre' : 'apellidos','valor' : this.Apellidos },
      {'nombre' : 'cedula','valor' : this.cedula },
      {'nombre' : 'fecha','valor' : this.fecha },
      {'nombre' : 'email','valor' : this.email },
      {'nombre' : 'github','valor' : this.github }
    ]
   this.Datos.forEach(element => {
    this.githubservice.GuardarCookie(element.nombre,element.valor);
   });
     swal('Registro Guardado Correctamente', 'Observar Pestaña Datos','success');
     this.LimpiarFiltros();


      this.toggle.emit();
  }

  Validar(){
debugger
    const momentDate = new Date(this.fecha); 
    const formattedDate = moment(momentDate).format("DD/MM/YYYY");
    this.fecha = formattedDate ;


    if(this.nombres == undefined || this.Apellidos == undefined || this.cedula == undefined){
      swal('','Los campos Nombre,Apellido,cédula son obligatorios','warning');
    }else{
      this.Guardar();
    }
  }
  LimpiarFiltros (){
    this.nombres  = '';
    this.Apellidos = '';
    this.cedula = undefined ;
    this.fecha = '';
    this.email= '';
    this.github = '';
  }

}
