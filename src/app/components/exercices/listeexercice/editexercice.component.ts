import { Component,  ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-editexercice',
  templateUrl: './editexercice.component.html',
  styleUrls: ['./editexercice.component.scss']
})
export class EditexerciceComponent {
  formFieldHelpers: string[] = [''];

  constructor(){}
 

 
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

  displayedColumns: string[] = ['id', 'nom_exercice', 'nombre_question', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  id: number;
  nom_exercice: string;
  nombre_question: number;
  
 
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nom_exercice: 'exemple',nombre_question:4},
  {id: 2, nom_exercice: 'exemple',nombre_question:6},
  {id: 3, nom_exercice: 'exemple',nombre_question:12},
  {id: 4, nom_exercice: 'exemple',nombre_question:24}];


