import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutermateriels',
  templateUrl: './ajoutermateriels.component.html',
  styleUrls: ['./ajoutermateriels.component.scss']
})
export class AjoutermaterielsComponent  {

  formFieldHelpers: string[] = [''];

 
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
