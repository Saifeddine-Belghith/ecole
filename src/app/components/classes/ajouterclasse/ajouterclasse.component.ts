import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-ajouterclasse',
  templateUrl: './ajouterclasse.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjouterclasseComponent  {
  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
