import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modifiereleve',
  templateUrl: './modifiereleve.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ModifiereleveComponent {
  formFieldHelpers: string[] = [''];
  constructor() { }

 
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

}
