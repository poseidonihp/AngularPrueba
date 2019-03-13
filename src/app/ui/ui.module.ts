import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from  '@angular/common/http';
import { MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './form-register/form-register.component';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SearchComponent } from './search/search.component';
import { GitHubService } from '../service/github.service';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './ui-routing.modules';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    DataTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent,RegisterComponent,SearchComponent],
  exports: [LayoutComponent,RegisterComponent,SearchComponent],
  providers : [GitHubService]
})
export class UiModule { }
