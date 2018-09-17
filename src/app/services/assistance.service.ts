import { Injectable } from '@angular/core';
import { IAssistServices } from '../interfaces/assist-services.interface';
import { ASSIST_SERVICES } from './assist-services.static';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  constructor() {
    this.assistServices = ASSIST_SERVICES;
   }

  assistServices: IAssistServices[];

  getAssistanceServices(): IAssistServices[] {
    return this.assistServices;
  }
}
