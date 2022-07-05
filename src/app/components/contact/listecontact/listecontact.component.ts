import { Component,  ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listecontact',
  templateUrl: './listecontact.component.html',
  styleUrls: ['./listecontact.component.scss']
})
export class ListecontactComponent  {
  
  formFieldHelpers: string[] = [''];
  constructor() { }

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
  tel1 ?: string;
  tel2 ?: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [




];