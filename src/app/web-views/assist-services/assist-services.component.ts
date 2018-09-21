import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AssistanceService } from '../../services/assistance.service';
import { IAssistServices } from '../../interfaces/assist-services.interface';
import { AssistanceListenerService } from '../../services/assistance-listener.service';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-assist-services',
  templateUrl: './assist-services.component.html',
  styleUrls: ['./assist-services.component.scss']
})
export class AssistServicesComponent implements OnInit {
  @Output() selectedService = new EventEmitter<IAssistServices>();

  constructor(private _assistSvc: AssistanceService,
              private _assistListenerSvc: AssistanceListenerService,
              private _scrollToService: ScrollToService) { }

  currentServices: IAssistServices[];

  scrollToFormConfig: ScrollToConfigOptions = {
    target: 'inicio'
  };

  serviceFromAccordion(service: IAssistServices) {
    this.selectedService.emit(service);
    this._assistListenerSvc.setAssistance(service);
    this._scrollToService.scrollTo(this.scrollToFormConfig);
  }

  ngOnInit() {
    this.currentServices = this._assistSvc.getAssistanceServices();
  }

}
