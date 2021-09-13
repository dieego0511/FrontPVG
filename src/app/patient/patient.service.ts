import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  public apiURL='http://localhost:8000/api/patient/';


  constructor(private httpCli: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpCli.get(this.apiURL);
  }

  create(patient: {name:string,email:string, phone:number}): Observable<any> {
    return this.httpCli.post(this.apiURL, patient);
  }

  edit(patient: {id:number, name:string,email:string, phone:number}): Observable<any> {
    return this.httpCli.put(this.apiURL+patient.id, patient );
  }

  delete(id: number): Observable<any> {
    return  this.httpCli.delete(this.apiURL+id);
  }
}
