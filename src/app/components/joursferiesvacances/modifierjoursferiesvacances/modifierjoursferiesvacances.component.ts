import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierjoursferiesvacances',
  templateUrl: './modifierjoursferiesvacances.component.html',
  styleUrls: ['./modifierjoursferiesvacances.component.scss']
})
export class ModifierjoursferiesvacancesComponent  {

  formFieldHelpers: string[] = [''];

 
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
