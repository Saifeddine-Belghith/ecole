import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-editemploye',
  templateUrl: './editemploye.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EditemployeComponent  {
  formFieldHelpers: string[] = [''];

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder)
  {
  }

  
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
  
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'matiere','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  id: number;
  nom: string;
  prenom: string;
  email:string;
  matiere:string;
  
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nom: 'gaddour',  prenom: 'sirine',email:"@exemple.com",matiere:" Cloud"},
  {id: 2, nom: 'gaddour',  prenom: 'sirine',email:" @exemple.com",matiere:" Big data"},
  {id: 3, nom: 'gaddour',  prenom: 'sirine',email:" @exemple.com",matiere:" Reseaux"},
  {id: 4, nom: 'gaddour',  prenom: 'sirine',email:" @exemple.com",matiere:" Multimedia"}];


