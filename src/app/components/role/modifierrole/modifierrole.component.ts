import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierrole',
  templateUrl: './modifierrole.component.html',
  styleUrls: ['./modifierrole.component.scss']
})
export class ModifierroleComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
