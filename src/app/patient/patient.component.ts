import { Component, OnInit } from '@angular/core';

import { PatientService } from './patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  patients: any[] = [];

  constructor( public pacServ: PatientService) { }

  ngOnInit(): void {
    this.getAllPatient()
  }

  getAllPatient() {
    this.pacServ.getAll().subscribe(data => {
      this.patients = data;
      console.log(this.patients);
    })
  }

  createPatient(patient: {name: string, email: string, phone: number}) {
    this.pacServ.create(patient).subscribe(data => data);
    this.getAllPatient();
  }

  editPatient(patient: {id: number, name: string, email: string, phone: number}) {
    this.pacServ.edit(patient).subscribe(data => {
      this.patients[this.patients.findIndex(u => u.id===patient.id)]=patient;
    })
  }

  deletePatient(id: number) {
    const pacDeletd = { id }
    this.pacServ.delete(pacDeletd.id).subscribe();
    this.getAllPatient();
  }

}
