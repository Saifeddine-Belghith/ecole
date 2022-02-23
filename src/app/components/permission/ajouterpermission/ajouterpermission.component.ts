import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-ajouterpermission',
  templateUrl: './ajouterpermission.component.html',
  styleUrls: ['./ajouterpermission.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AjouterpermissionComponent implements AfterViewInit {
 
 
  formFieldHelpers: string[] = [''];
  constructor() {  }
  
  displayedColumns: string[] = ['module', 'ajouter', 'modifier', 'afficher','supprimer'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  module: string;
  ajouter: boolean;
  supprimer: boolean;
  modifier: boolean;
  afficher: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {module: "Administrateur", ajouter: true, modifier: true, supprimer: true, afficher: true},
  {module: "Utilisateurs", ajouter: false, modifier: false, supprimer: false,afficher: true},
  {module: "Eleves", ajouter: false, modifier: false, supprimer: false,afficher: true},
  {module: "Employes", ajouter: false, modifier: false, supprimer: false,afficher: true}];



  
  
 



 







