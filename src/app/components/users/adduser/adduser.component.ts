import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'app/layout/common/quick-chat/quick-chat.types';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AdduserComponent {
  contact: Contact;
  formFieldHelpers: string[] = [''];

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get the form field helpers as string
   */
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
