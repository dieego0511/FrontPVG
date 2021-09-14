import { Component, OnInit } from '@angular/core';

import { CitasService } from './citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(public citaServ: CitasService) { }

  citass: any[] = [];
  patients: any[] = [];


  ngOnInit(): void {
    this.getAllCitas()
    this.getAllPac()
  }

  getAllCitas() {
    this.citaServ.getAllC().subscribe(data => {
      this.citass = data;
      //console.log(this.citass);
    })
  }

  getAllPac() {
    this.citaServ.getAllP().subscribe(data => {
      this.patients = data;
      console.log('pacientes abajo');
      console.log(this.patients);
    })
  }

  createCitas(citas: {pac_id:number , observations:string}) {
    this.citaServ.createC(citas).subscribe(data => data);
    this.getAllCitas();
  }



  deleteCitas(id: number) {
    const citaDeletd = { id }
    this.citaServ.deleteC(citaDeletd.id).subscribe();
  }

}
