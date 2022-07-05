import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listeenseignant',
  templateUrl: './listeenseignant.component.html',
  styleUrls: ['./listeenseignant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListeenseignantComponent  {
  formFieldHelpers: string[] = [''];

  constructor()
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
  {id: 1, nom: 'khiari',  prenom: 'mohammed sami',email:"@exemple.com",matiere:" math"},
  {id: 2, nom: 'mkadem',  prenom: 'yamen',email:" @exemple.com",matiere:" lecture"},
  {id: 3, nom: 'bensalih',  prenom: 'ali',email:" @exemple.com",matiere:" production"},
  ];


