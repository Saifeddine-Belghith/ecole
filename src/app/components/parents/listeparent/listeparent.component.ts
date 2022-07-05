import { Component,  ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listeparent',
  templateUrl: './listeparent.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./listeparent.component.scss']
})
export class ListeparentComponent  {
  formFieldHelpers: string[] = [''];
  constructor() { }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'fils', 'numero','adresse','action'];
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
  fils:string;
  numero:number;
  adresse:string;
  
 
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nom: 'exemple',  prenom: 'exemple',fils:"exemple",numero:12345678,adresse:"a"},
  {id: 2, nom: 'exemple',  prenom: 'exemple',fils:" exemple",numero:12345678,adresse:"b"},
  {id: 3, nom: 'exemple',  prenom: 'exemple',fils:" exemple",numero:12345678,adresse:"c"},
  {id: 4, nom: 'exemple',  prenom: 'exemple',fils:" exemple",numero:12345678,adresse:"d"}];


