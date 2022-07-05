import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouterpaiement',
  templateUrl: './ajouterpaiement.component.html',
  styleUrls: ['./ajouterpaiement.component.scss']
})
export class AjouterpaiementComponent  {

  formFieldHelpers: string[] = [''];

 
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
