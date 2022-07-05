import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modifierenseignant',
  templateUrl: './modifierenseignant.component.html',
  styleUrls: ['./modifierenseignant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModifierenseignantComponent  {

  
  formFieldHelpers: string[] = [''];

  constructor()
  {
  }


  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}