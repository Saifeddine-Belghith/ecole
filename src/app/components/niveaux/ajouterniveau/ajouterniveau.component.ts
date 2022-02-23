import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouterniveau',
  templateUrl: './ajouterniveau.component.html',
  
  encapsulation: ViewEncapsulation.None
})
export class AjouterniveauComponent {
  formFieldHelpers: string[] = [''];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}