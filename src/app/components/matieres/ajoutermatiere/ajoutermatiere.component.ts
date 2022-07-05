import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutermatiere',
  templateUrl: './ajoutermatiere.component.html',
  styleUrls: ['./ajoutermatiere.component.scss']
})
export class AjoutermatiereComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  constructor() { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
}
