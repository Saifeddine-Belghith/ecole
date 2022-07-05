import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'app/layout/common/quick-chat/quick-chat.types';

@Component({
  selector: 'app-ajoutercontact',
  templateUrl: './ajoutercontact.component.html',
  styleUrls: ['./ajoutercontact.component.scss']
})
export class AjoutercontactComponent  {
  contact: Contact;
  formFieldHelpers: string[] = [''];

  constructor (private _formBuilder: FormBuilder)  { }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
