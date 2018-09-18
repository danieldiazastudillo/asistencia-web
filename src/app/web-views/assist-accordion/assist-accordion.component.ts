import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assist-accordion',
  templateUrl: './assist-accordion.component.html',
  styleUrls: ['./assist-accordion.component.scss']
})
export class AssistAccordionComponent implements OnInit {

  constructor() { }

  customClass = 'assistAccordionGroup';
  isOpen: boolean;

  logOpen(event: boolean) {
    this.isOpen = event;
  }

  ngOnInit() {
  }

}
