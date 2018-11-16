import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IAssistServices } from '../../interfaces/assist-services.interface';
import { AssistanceService } from '../../services/assistance.service';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { AssistanceListenerService } from '../../services/assistance-listener.service';

@Component({
  selector: 'app-modal-services',
  templateUrl: './modal-services.component.html',
  styleUrls: ['./modal-services.component.scss']
})
export class ModalServicesComponent implements OnInit {
  @Output() selectedService = new EventEmitter<IAssistServices>();

  constructor(private _modalService: NgbModal,
              private _assistanceSvc: AssistanceService,
              private _assistListenerSvc: AssistanceListenerService,
              private _scrollToService: ScrollToService) { }

  serviceSelection: IAssistServices;

  scrollToFormConfig: ScrollToConfigOptions = {
    target: 'inicio'
  };

  modalReference: any;
  closeResult: any;

  closeWithSelection(serviceName: string) {
    this.modalReference.close('Hello!');
    this.selectServiceToForm(serviceName);
  }

  openModal(content: any, serviceName: string) {
    this.serviceSelection = this._getServiceByName(serviceName);
    this.modalReference = this._modalService.open(content, { centered: true, size: 'lg' });
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this._getDismissReason(reason)}`;
    });
  }

  selectServiceToForm(serviceName: string) {
    this._assistListenerSvc.setAssistance(this._getServiceByName(serviceName));
    this._scrollToService.scrollTo(this.scrollToFormConfig); // scroller
  }

  private _getServiceByName(serviceName: string) {
    return this._assistanceSvc.getAssistanceServiceByName(serviceName);
  }

  private _getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



  ngOnInit() {
  }

}
