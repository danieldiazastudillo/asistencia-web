import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AssistanceService } from '../../services/assistance.service';
import { IAssistServices } from '../../interfaces/assist-services.interface';
import { ErrorsService } from '../../services/errors.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [AssistanceService, ErrorsService]
})
export class ContactFormComponent implements OnInit {

  constructor(private _fb: FormBuilder, 
              private _assistSvc: AssistanceService, 
              private _errorsSvc: ErrorsService) { }

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

  ngOnInit() {
    this.contactForm = this._createForm();
    this._formBinder();
    this._fillDDLS();

    this.errors = this._errorsSvc.getErrors();
  }

  onSubmit() {
    const obj: any = {
      name: this.contactForm.get('nameLastName').value,
      phone: this.contactForm.get('phone').value,
      assistance: this.contactForm.get('assistance').value,
      message: this.contactForm.get('message').value
    };

    const valuesFromForm = `${obj.name} | ${obj.phone} | ${obj.assistance} | ${obj.message}`;

    alert(valuesFromForm);
  }

}
