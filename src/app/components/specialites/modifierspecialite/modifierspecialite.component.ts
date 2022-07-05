import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierspecialite',
  templateUrl: './modifierspecialite.component.html',
  styleUrls: ['./modifierspecialite.component.scss']
})
export class ModifierspecialiteComponent  {
  formFieldHelpers: string[] = [''];

  constructor()
  {
  }


  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}

