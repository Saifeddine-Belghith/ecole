import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierrendezvous',
  templateUrl: './modifierrendezvous.component.html',
  styleUrls: ['./modifierrendezvous.component.scss']
})
export class ModifierrendezvousComponent  {
  formFieldHelpers: string[] = [''];
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}