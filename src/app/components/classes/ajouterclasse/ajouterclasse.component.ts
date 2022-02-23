import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ajouterclasse',
  templateUrl: './ajouterclasse.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjouterclasseComponent  {
  formFieldHelpers: string[] = [''];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
