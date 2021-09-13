import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientComponent } from '../patient/patient.component';

@Component({
  selector: 'app-modalpatient',
  templateUrl: './modalpatient.component.html',
  styleUrls: ['./modalpatient.component.css']
})
export class ModalpatientComponent implements OnInit {

  // if( patient.length === 0){
  //   console.log();
  // }

  @Input() patient:{id?:number, name: string, email: string, phone: number} = {name: '', email: '', phone: 0}
  @Input() tittle:string=''
  @Input() name:string=''

  @Output() createPatient1 : EventEmitter<any> = new EventEmitter();
  @Output() editPatient1 : EventEmitter<any> = new EventEmitter();

  inputId:any;
  inputName:any;
  inputEmail:any;
  inputPhone:any;

  closeResult: string | undefined;

  constructor(private MServ: NgbModal) {}

  ngOnInit(): void {
    this.inputId =this.patient.id
    this.inputName = this.patient.name
    this.inputEmail=this.patient.email
    this.inputPhone=this.patient.phone
  }

  open(content: any) {
    this.MServ.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if(this.inputId){
        this.editPatient1.emit({id:this.inputId, name: this.inputName, email: this.inputEmail, phone: this.inputPhone})
      }else{
        this.createPatient1.emit({name: this.inputName, email: this.inputEmail, phone: this.inputPhone})
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
