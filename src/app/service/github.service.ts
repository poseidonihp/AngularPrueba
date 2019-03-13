import { Injectable } from "@angular/core";
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';



@Injectable()
export class GitHubService {

    URL : string = "https://api.github.com/";
    constructor(private http: HttpClient,private cookie : CookieService){

    }

    // obtener el usuario por la api de github
    ObtenerUsuario(usuario : string) {
        return this.http.get(this.URL + 'users/'+usuario +'/repos')
        
    }
    //Guardar Datos de cookie
    GuardarCookie(nombre:string,valor:string){
        this.cookie.set(nombre,valor,12);
    }

    //Obtener Datos de La cookie
    ObtenerCookie(){
         return this.cookie.getAll();
    }
    //Borrar Datos de la cookie
    BorrarCokie(){
        this.cookie.deleteAll();
    }
}