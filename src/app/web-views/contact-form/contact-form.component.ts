import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AssistanceService } from '../../services/assistance.service';
import { IAssistServices } from '../../interfaces/assist-services.interface';
import { ErrorsService } from '../../services/errors.service';
import { AssistanceListenerService } from '../../services/assistance-listener.service';
import { MailerService } from '../../services/mailer.service';
import { IEmail } from '../../interfaces/email.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor(private _fb: FormBuilder,
              private _assistSvc: AssistanceService,
              private _errorsSvc: ErrorsService,
              private _assistListenerSvc: AssistanceListenerService,
              private _mailerService: MailerService,
              private _toastr: ToastrService) {}

  contactForm: FormGroup;
  /*-----------------------------*/
  nameLastName: AbstractControl;
  phone: AbstractControl;
  email: AbstractControl;
  assistance: AbstractControl;
  message: AbstractControl;

  /*--------------------------------------*/
  // values for dropdowns
  /*------------------------------------- */
  assistanceDDL: IAssistServices[];
  selectedAssistance: IAssistServices;
  /*------------------------------------- */

  errors: any[];

  private _createForm(): FormGroup {
    const formObject: FormGroup = this._fb.group({
      nameLastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      assistance: [null, [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    return formObject;
  }

  private _formBinder(): void {
    this.nameLastName = this.contactForm.get('nameLastName');
    this.phone = this.contactForm.get('phone');
    this.email = this.contactForm.get('email');
    this.assistance = this.contactForm.get('assistance');
    this.message = this.contactForm.get('message');
  }

  private _fillDDLS(): void {
    this.assistanceDDL = this._assistSvc.getAssistanceServices();
  }

  private _setSelectedAssistance(service: IAssistServices) {
    console.log('Svc from Subject', service);
    this.contactForm.get('assistance').patchValue(service.name);
    this.assistance = this.contactForm.get('assistance');
  }


  onSubmit() {
    const obj: IEmail = {
      name: this.contactForm.get('nameLastName').value,
      phone: this.contactForm.get('phone').value,
      email: this.contactForm.get('email').value,
      assistance: this.contactForm.get('assistance').value,
      message: this.contactForm.get('message').value
    };

    this._mailerService.sendEmail(obj).subscribe(res => {
      console.log('Email sent...', res);
      this.resetForm();
    });
  }

  resetForm() {
    this.contactForm.reset();
  }

  showToastr() {
    this._toastr.success('Este es el body', 'Título del Toastr', {
      timeOut: 30000
    });
  }

  ngOnInit() {
    this.contactForm = this._createForm();
    this._formBinder();
    this._fillDDLS();

    this.errors = this._errorsSvc.getErrors();

    this._assistListenerSvc.listenAssistance().subscribe((service: IAssistServices) => {
      console.log('Changed obs...', service);
      this._setSelectedAssistance(service);
    });
  }
}
