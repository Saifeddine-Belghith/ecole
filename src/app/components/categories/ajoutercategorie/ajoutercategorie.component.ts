import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajoutercategorie',
  templateUrl: './ajoutercategorie.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjoutercategorieComponent  {
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
