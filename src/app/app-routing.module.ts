import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent} from './patient/patient.component'
import { CitasComponent } from './citas/citas.component'

const routes: Routes = [
{path: 'first-component', component: PatientComponent},
{path:'second-component', component: CitasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }