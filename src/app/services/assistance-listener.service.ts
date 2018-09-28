import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IAssistServices } from '../interfaces/assist-services.interface';

@Injectable({
  providedIn: 'root'
})
export class AssistanceListenerService {

  private _assistListener = new Subject<IAssistServices>();

  listenAssistance(): Observable<IAssistServices> {
    return this._assistListener.asObservable();
  }

  setAssistance(assistance: IAssistServices) {
    console.log('Listener...', assistance);
    this._assistListener.next(assistance);
  }

  constructor() { }
}
