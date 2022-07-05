import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modifierformationsprofesseur',
  templateUrl: './modifierformationsprofesseur.component.html',
  styleUrls: ['./modifierformationsprofesseur.component.scss']
})
export class ModifierformationsprofesseurComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  toppings = new FormControl();
  toppingList: string[] = ['mohamed', 'abir', 'ikhlass', 'nihel', 'malak', 'hilmi'];

  constructor(private _formBuilder: FormBuilder)
  {
  }ngOnInit(): void {
  throw new Error('Method not implemented.');
}


}
