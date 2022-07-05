import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouterrendezvous',
  templateUrl: './ajouterrendezvous.component.html',
  styleUrls: ['./ajouterrendezvous.component.scss']
})
export class AjouterrendezvousComponent {
  formFieldHelpers: string[] = [''];
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}