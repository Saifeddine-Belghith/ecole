import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ajoutereleve',
  templateUrl: './ajoutereleve.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjoutereleveComponent  {
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
