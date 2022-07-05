import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierclasse',
  templateUrl: './modifierclasse.component.html',
  styleUrls: ['./modifierclasse.component.scss']
})
export class ModifierclasseComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}

