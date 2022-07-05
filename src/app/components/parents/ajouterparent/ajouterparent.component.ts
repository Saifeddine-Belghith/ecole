import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-ajouterparent',
  templateUrl: './ajouterparent.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjouterparentComponent {
  formFieldHelpers: string[] = [''];
  constructor() { }

 
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

}
