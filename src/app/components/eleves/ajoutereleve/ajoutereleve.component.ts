import { Component, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-ajoutereleve',
  templateUrl: './ajoutereleve.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjoutereleveComponent  {
  formFieldHelpers: string[] = [''];

 
  constructor()
  {
  }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
