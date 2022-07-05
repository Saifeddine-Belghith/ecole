import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutersalle',
  templateUrl: './ajoutersalle.component.html',
  styleUrls: ['./ajoutersalle.component.scss']
})
export class AjoutersalleComponent implements OnInit {
  formFieldHelpers: string[] = [''];

  constructor() { }
  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}