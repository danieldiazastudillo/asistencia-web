import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IEmail } from '../interfaces/email.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  constructor(private _http: HttpClient, private _toastr: ToastrService) {}

  private emailPHP = '../../assets/email.php';

  sendEmail(message: IEmail): Observable<IEmail> | any {
    return this._http.post(this.emailPHP, message).pipe(
      tap(response => {
        console.log(response);
        this._toastr.success('Nos pondremos inmeditamente en contacto', 'Mensaje Enviado');
      })
    );
  }
}
