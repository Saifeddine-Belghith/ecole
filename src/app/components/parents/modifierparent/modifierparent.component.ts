import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modifierparent',
  templateUrl: './modifierparent.component.html',
  styleUrls: ['./modifierparent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModifierparentComponent  {

  formFieldHelpers: string[] = [''];
  constructor() { }

 
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

}

