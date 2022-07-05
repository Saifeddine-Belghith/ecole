import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-ajouterenseignant',
  templateUrl: './ajouterenseignant.component.html',
  styleUrls: ['./ajouterenseignant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AjouterenseignantComponent  {

  formFieldHelpers: string[] = [''];

  constructor()
  {
  }


  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
