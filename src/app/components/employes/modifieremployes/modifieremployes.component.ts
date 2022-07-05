import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modifieremployes',
  templateUrl: './modifieremployes.component.html',
  styleUrls: ['./modifieremployes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModifieremployesComponent  {
  formFieldHelpers: string[] = [''];

  constructor()
  {
  }


  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}

