import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, PLATFORM_ID, Inject } from '@angular/core';
import { IAssistServices } from '../../interfaces/assist-services.interface';
import 'jquery';
import { isPlatformBrowser } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  @ViewChild('vegas')
  vegas: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  vegasConfig = {
    slides: [
      { src: '../../../assets/asistencia/img-carousel/carousel-1.jpg' },
      { src: '../../../assets/asistencia/img-carousel/carousel-2.jpg' },
      { src: '../../../assets/asistencia/img-carousel/carousel-3.jpg' }
    ],
    timer: false
  };

  selectedService: IAssistServices;

  serviceFromSection(service: IAssistServices) {
    this.selectedService = service;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      $(this.vegas.nativeElement).vegas(this.vegasConfig);
    }
  }

  ngAfterViewChecked() {}
}
