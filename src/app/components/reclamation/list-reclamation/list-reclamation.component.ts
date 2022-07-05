import { Component,  ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.scss']
})
export class ListReclamationComponent  {
  formFieldHelpers: string[] = [''];

  constructor() { }

  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

  displayedColumns: string[] = ['id', 'date', 'Titre','Description', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  
  id: number;
  
  Titre: string;
  Description: string
 
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1,Titre: 'bonne',Description:'oui'},
  {id: 2,Titre: 'bonne',Description:'non'},
  {id: 3,Titre: 'mauvaise',Description:'oui'}
 ];

