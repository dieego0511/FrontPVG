import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CitasComponent } from '../citas/citas.component';


@Component({
  selector: 'app-modalcitas',
  templateUrl: './modalcitas.component.html',
  styleUrls: ['./modalcitas.component.css']
})
export class ModalcitasComponent implements OnInit {

  @Input() citas:{date_id?:number,  observations: string } = {date_id: 0,  observations: '' }
  @Input() tittle:string=''
  @Input() name:string=''
  @Input() patients: any 



  @Output() createCitas1 : EventEmitter<any> = new EventEmitter();
  @Output() editCitas1 : EventEmitter<any> = new EventEmitter();

  patient: any

  inputDateId:any;
  inputPacId:any;
  inputName:any;
  inputObservations:any;
  inputCreate_At:any;

  
  closeResult: string | undefined;

  constructor(private MServ2: NgbModal, private pacServ2: CitasComponent) {}

  ngOnInit(): void {
    this.inputDateId =this.citas.date_id
    this.inputObservations=this.citas.observations
  }

  selectPatient(patient: any) {
    this.patient= patient
  }
  open(content: any) {
    this.MServ2.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.inputDateId){
        
        this.editCitas1.emit({date_id:this.inputDateId, pac_id: this.inputPacId, observations: this.inputObservations})
      }else{
        this.createCitas1.emit({pac_id: this.inputPacId, observations: this.inputObservations})
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  registerCitas() {

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
