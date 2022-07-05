import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouterjoursferiesvacances',
  templateUrl: './ajouterjoursferiesvacances.component.html',
  styleUrls: ['./ajouterjoursferiesvacances.component.scss']
})
export class AjouterjoursferiesvacancesComponent  {

  formFieldHelpers: string[] = [''];

 
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}