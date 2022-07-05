import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifiermatiere',
  templateUrl: './modifiermatiere.component.html',
  styleUrls: ['./modifiermatiere.component.scss']
})
export class ModifiermatiereComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}