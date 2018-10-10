import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IAssistServices } from '../../interfaces/assist-services.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('vegas') colorbox: ElementRef;

  constructor() { }

  selectedService: IAssistServices;

  serviceFromSection(service: IAssistServices) {
    this.selectedService = service;
  }

  ngOnInit() {}

}
