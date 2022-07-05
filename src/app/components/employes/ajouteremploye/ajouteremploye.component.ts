import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-ajouteremploye',
  templateUrl: './ajouteremploye.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjouteremployeComponent  {
  formFieldHelpers: string[] = [''];

  constructor()
  {
  }


  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
