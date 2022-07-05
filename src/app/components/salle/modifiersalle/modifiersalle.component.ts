import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifiersalle',
  templateUrl: './modifiersalle.component.html',
  styleUrls: ['./modifiersalle.component.scss']
})
export class ModifiersalleComponent implements OnInit {
  formFieldHelpers: string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
