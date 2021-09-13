import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientComponent } from './patient/patient.component';
import { ModalpatientComponent } from './modalpatient/modalpatient.component';
import { FormsModule } from '@angular/forms';
import { CitasComponent } from './citas/citas.component';
import { ModalcitasComponent } from './modalcitas/modalcitas.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    ModalpatientComponent,
    CitasComponent,
    ModalcitasComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
