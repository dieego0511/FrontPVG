import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  public apiURL2='http://localhost:8000/api/citas/';

  public apiURL1='http://localhost:8000/api/patient/';


  constructor(private httpCli: HttpClient) { }

  getAllC(): Observable<any> {
    return this.httpCli.get(this.apiURL2);
  }

  getAllP(): Observable<any> {
    return this.httpCli.get(this.apiURL1);

  }

  createC(citas: {pac_id:number , observatios:string}): Observable<any> {
    return this.httpCli.post(this.apiURL2, citas);
  }



  deleteC(id: number): Observable<any> {
    return  this.httpCli.delete(this.apiURL2+id);
  }
}
