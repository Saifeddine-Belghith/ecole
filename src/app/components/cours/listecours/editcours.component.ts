import { Component,  ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-editcours',
  templateUrl: './editcours.component.html',
  styleUrls: ['./editcours.component.scss']
})
export class EditcoursComponent  {
  formFieldHelpers: string[] = [''];

  constructor(){}
 

 
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

  displayedColumns: string[] = ['id', 'chapitre', 'exercice','cours', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  id: number;
  chapitre: string;
  exercice: string;
  cours: string;
  
 
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, chapitre: 'exemple',exercice:'exemple',cours:'exemple.pdf'},
  {id: 2, chapitre: 'exemple',exercice:'exemple',cours:'exemple.docx'},
  {id: 3, chapitre: 'exemple',exercice:'exemple',cours:'exemple.pfe'},
  {id: 4, chapitre: 'exemple',exercice:'exemple',cours:'exemple.pfe'}];


