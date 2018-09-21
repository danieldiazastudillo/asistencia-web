import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssistanceService } from '../../services/assistance.service';
import { IAssistServices } from '../../interfaces/assist-services.interface';
import { AssistanceListenerService } from '../../services/assistance-listener.service';

@Component({
  selector: 'app-assist-services',
  templateUrl: './assist-services.component.html',
  styleUrls: ['./assist-services.component.scss']
})
export class AssistServicesComponent implements OnInit {
  @Output() selectedService = new EventEmitter<IAssistServices>();

  constructor(private _assistSvc: AssistanceService,
              private _assistListenerSvc: AssistanceListenerService) { }

  currentServices: IAssistServices[];

  serviceFromAccordion(service: IAssistServices) {
    this.selectedService.emit(service);
    this._assistListenerSvc.setAssistance(service);
  }

  ngOnInit() {
    this.currentServices = this._assistSvc.getAssistanceServices();
  }

}
