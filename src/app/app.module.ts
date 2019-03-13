import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CookieService} from 'ngx-cookie-service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './ui/form-register/form-register.component';
import { SearchComponent } from './ui/search/search.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,    
    MatNativeDateModule,
    TableModule,
    DataTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCardModule,
    UiModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
