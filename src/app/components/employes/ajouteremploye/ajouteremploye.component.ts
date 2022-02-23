import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouteremploye',
  templateUrl: './ajouteremploye.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjouteremployeComponent  {
  formFieldHelpers: string[] = [''];

  displayedColumns: string[] = ['classe'];



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
