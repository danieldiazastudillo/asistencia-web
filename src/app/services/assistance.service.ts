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

  getAssistanceServiceByName(serviceName: string): IAssistServices {
    const service: IAssistServices = this.assistServices.find(item => {
      return item.name === serviceName;
    });

    return service;
  }
}
