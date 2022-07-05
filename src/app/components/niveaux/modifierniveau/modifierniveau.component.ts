import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierniveau',
  templateUrl: './modifierniveau.component.html',
  styleUrls: ['./modifierniveau.component.scss']
})
export class ModifierniveauComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
