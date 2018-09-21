import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAssistServices } from '../../interfaces/assist-services.interface';

@Component({
  selector: 'app-assist-accordion',
  templateUrl: './assist-accordion.component.html',
  styleUrls: ['./assist-accordion.component.scss']
})
export class AssistAccordionComponent implements OnInit {
  @Input() item: IAssistServices;
  @Output() selectedService = new EventEmitter<IAssistServices>();

  constructor() { }

  customClass = 'assistAccordionGroup';
  isOpen: boolean;

  selectService() {
    if(this.item) {
      this.selectedService.emit(this.item);      
    }
  }

  logOpen(event: boolean) {
    this.isOpen = event;
  }

  ngOnInit() {
  }

}
