import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifierexercice',
  templateUrl: './modifierexercice.component.html',
  styleUrls: ['./modifierexercice.component.scss']
})
export class ModifierexerciceComponent implements OnInit {
  formFieldHelpers: string[] = [''];
 
  constructor( ) { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }


  ajouterQuestion(): void
  {
  }

  ajouterReponse(): void
  {
  }
}
