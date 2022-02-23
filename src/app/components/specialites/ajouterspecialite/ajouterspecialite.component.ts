import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouterspecialite',
  templateUrl: './ajouterspecialite.component.html',
  styleUrls: ['./ajouterspecialite.component.scss']
})
export class AjouterspecialiteComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

}
