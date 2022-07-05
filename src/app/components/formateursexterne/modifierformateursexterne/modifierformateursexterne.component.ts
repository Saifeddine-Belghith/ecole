import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modifierformateursexterne',
  templateUrl: './modifierformateursexterne.component.html',
  styleUrls: ['./modifierformateursexterne.component.scss']
})
export class ModifierformateursexterneComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  toppings = new FormControl('');
  toppingList: string[] = ['Math', 'physique', 'science', 'francais', 'arabic', 'anglais'];
  constructor(private _formBuilder: FormBuilder)
  {
  }ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}
