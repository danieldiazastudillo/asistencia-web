import { Component, OnInit, ViewChild } from '@angular/core';
import { IAssistServices } from '../../interfaces/assist-services.interface';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  selectedService: IAssistServices;

  serviceFromSection(service: IAssistServices) {
    this.selectedService = service;
    console.log('In home', this.selectedService);
  }

  ngOnInit() {
  }

}
