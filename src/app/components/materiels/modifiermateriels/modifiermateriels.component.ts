import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifiermateriels',
  templateUrl: './modifiermateriels.component.html',
  styleUrls: ['./modifiermateriels.component.scss']
})
export class ModifiermaterielsComponent  {

  formFieldHelpers: string[] = [''];

 
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}

