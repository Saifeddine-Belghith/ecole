import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-editemploye',
  templateUrl: './editemploye.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EditemployeComponent  {
  formFieldHelpers: string[] = [''];

  constructor()
  {
  }

  
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }
  
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'type','action'];
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
  type:string;
  
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nom: 'exemple',  prenom: 'exemple',email:"@exemple.com",type:" Directeur"},
  {id: 2, nom: 'exemple',  prenom: 'exemple',email:" @exemple.com",type:" Directeur général"},
  {id: 3, nom: 'exemple',  prenom: 'exemple',email:" @exemple.com",type:" Directeur"},
  {id: 4, nom: 'exemple',  prenom: 'exemple',email:" @exemple.com",type:" Directeur général"}];


