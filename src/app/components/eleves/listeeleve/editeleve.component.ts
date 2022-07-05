import { Component,  ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-editeleve',
  templateUrl: './editeleve.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./editeleve.component.scss']
  
})
export class EditeleveComponent  {
  formFieldHelpers: string[] = [''];

  constructor(){}
 

 
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'specialite','niveau','classe','action'];
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
  specialite:string;
  niveau:string;
  classe:string;
 
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nom: 'exemple',  prenom: 'exemple',email:"@exemple.com",specialite:" multimedia",niveau:"1er",classe:"1lm2"},
  {id: 2, nom: 'exemple',  prenom: 'exemple',email:" @exemple.com",specialite:" reseaux",niveau:"2eme",classe:"2lr1"},
  {id: 3, nom: 'exemple',  prenom: 'exemple',email:" @exemple.com",specialite:" telecom",niveau:"3eme",classe:"3lt4"},
  {id: 4, nom: 'exemple',  prenom: 'exemple',email:" @exemple.com",specialite:" multimedia",niveau:"3eme",classe:"3lm2"}];


