import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierpaiement',
  templateUrl: './modifierpaiement.component.html',
  styleUrls: ['./modifierpaiement.component.scss']
})
export class ModifierpaiementComponent  {
  formFieldHelpers: string[] = [''];
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}

