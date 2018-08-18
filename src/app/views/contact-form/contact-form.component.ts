import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

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
  assistanceDDL: any[];

  /*------------------------------------- */

  errors = [
    {
      name: 'required',
      text: 'Este campo es requerido',
      rules: ['touched', 'invalid']
    },
    {
      name: 'email',
      text: 'Debe ser un correo electrónico válido',
      rules: ['touched', 'invalid']
    }
  ];

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
    this.assistanceDDL = [
      { name: 'Plomería', description: 'Plomería - Cod. 456' },
      { name: 'Carpintería', description: 'Carpintería - Cod. 456' },
      { name: 'Armado', description: 'Armado - Cod. 456' },
      { name: 'Mecánica', description: 'Mecánica - Cod. 456' }
    ];
  }

  ngOnInit() {
    this.contactForm = this._createForm();
    this._formBinder();
    this._fillDDLS();
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
