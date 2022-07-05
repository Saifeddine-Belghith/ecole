import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modifier-reclamation',
  templateUrl: './modifier-reclamation.component.html',
  styleUrls: ['./modifier-reclamation.component.scss']
})
export class ModifierReclamationComponent  {
  formFieldHelpers: string[] = [''];
  
  constructor(private _formBuilder: FormBuilder)

 
  {

  }
}