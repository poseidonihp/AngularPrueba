import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './form-register/form-register.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
    {
      path: 'registrar',
      component: RegisterComponent
    },
    {
      path: 'buscar',
      component: SearchComponent
    },
    {
      path: '',
      redirectTo: 'registrar',
      pathMatch : 'full'
    },
    {
      path: '**',
      redirectTo: 'registrar',
      pathMatch : 'full'
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}