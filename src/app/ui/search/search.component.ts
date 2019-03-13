import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/service/github.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
 styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   
    Usuario : string;

    columns : any ;
    datos:any;
    ver : boolean = true ;

    

  constructor(private githubservice : GitHubService) { }

  ngOnInit() {


  }
 

  Consultar(){
this.githubservice.ObtenerUsuario(this.Usuario).subscribe(res =>{
  this.datos = res ;
  if( this.datos == 0){
    swal('','No se encontraron Registros','warning');
    this.ver=true;
  }else{

    this.ver = false ;
  }
    

   
},
error => {
  this.ver=true;
  swal('','El usuario no existe en github','error');
})
    
  }

}
