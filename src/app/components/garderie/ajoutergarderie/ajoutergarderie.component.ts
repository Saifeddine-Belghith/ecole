import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajoutergarderie',
  templateUrl: './ajoutergarderie.component.html',
  styleUrls: ['./ajoutergarderie.component.scss']
})
export class AjoutergarderieComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  toppings = new FormControl();
  toppingList: string[] = ['mohamed', 'abir', 'ikhlass', 'nihel', 'malak', 'hilmi'];

  constructor(private _formBuilder: FormBuilder)
  {
  }ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
