import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacter',
  templateUrl: './contacter.component.html',
  styleUrls: ['./contacter.component.scss']
})
export class ContacterComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
