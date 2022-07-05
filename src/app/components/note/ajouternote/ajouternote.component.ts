import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouternote',
  templateUrl: './ajouternote.component.html',
  styleUrls: ['./ajouternote.component.scss']
})
export class AjouternoteComponent implements OnInit {
  formFieldHelpers: string[] = [''];
  toppings = new FormControl();
  toppingList: string[] = ['mohamed', 'abir', 'ikhlass', 'nihel', 'malak', 'hilmi'];

  constructor(private _formBuilder: FormBuilder)
  {
  }ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}