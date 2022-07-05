import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addexercice',
  templateUrl: './addexercice.component.html',
  styleUrls: ['./addexercice.component.scss']
})
export class AddexerciceComponent implements OnInit {
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
