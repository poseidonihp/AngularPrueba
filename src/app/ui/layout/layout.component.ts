import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GitHubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
//   styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  nombre : any;
  nombres : any;

  constructor(private githubservice : GitHubService) { }

  ngOnInit() {
  }

  ObtenerDatos(){
    
    this.nombres = this.githubservice.ObtenerCookie();
  
  }

}
