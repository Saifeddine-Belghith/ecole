import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifiercours',
  templateUrl: './modifiercours.component.html',
  styleUrls: ['./modifiercours.component.scss']
})
export class ModifiercoursComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}