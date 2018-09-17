import { Injectable } from '@angular/core';

const errors = [
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

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  errors: any[];

  constructor() {
    this.errors = errors;
  }

  getErrors() {
    return this.errors;
  }




}
