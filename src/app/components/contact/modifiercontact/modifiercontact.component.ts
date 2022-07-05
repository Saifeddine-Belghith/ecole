import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'app/layout/common/quick-chat/quick-chat.types';

@Component({
  selector: 'app-modifiercontact',
  templateUrl: './modifiercontact.component.html',
  styleUrls: ['./modifiercontact.component.scss']
})
export class ModifiercontactComponent implements OnInit {
  contact: Contact;
  formFieldHelpers: string[] = [''];

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
