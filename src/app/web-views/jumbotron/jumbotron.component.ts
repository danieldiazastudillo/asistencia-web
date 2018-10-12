import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as JQuery from 'jquery';
@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @ViewChild('hola')
  hola: ElementRef;

  constructor() {}


  ngOnInit() {
    // const elem = document.querySelectorAll('div.container-c div.slide');

    // let index = 0;
    // setInterval(() => {
    //   index = index + 1 <= elem.length ? index + 1 : 0;

    //   if (elem[index]) {
    //     elem[index].classList.add('show');
    //   }

    //   if (elem[index - 1]) {
    //     elem[index - 1].classList.remove('show');
    //   }
    // }, 2000);
  }
}
