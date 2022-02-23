import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouterrole',
  templateUrl: './ajouterrole.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjouterroleComponent {
  formFieldHelpers: string[] = [''];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
