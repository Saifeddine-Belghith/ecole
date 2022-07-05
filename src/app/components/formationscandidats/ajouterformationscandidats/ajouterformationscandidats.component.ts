import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouterformationscandidats',
  templateUrl: './ajouterformationscandidats.component.html',
  styleUrls: ['./ajouterformationscandidats.component.scss']
})
export class AjouterformationscandidatsComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  toppings = new FormControl();
  toppingList: string[] = ['mohamed', 'abir', 'ikhlass', 'nihel', 'malak', 'hilmi'];

  constructor(private _formBuilder: FormBuilder)
  {
  }ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
