import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-listematieres',
  templateUrl: './listematieres.component.html',
  styleUrls: ['./listematieres.component.scss']
})
export class ListematieresComponent implements AfterViewInit {

  constructor() { }

  displayedColumns: string[] = ['id','matiere', 'niveau', 'specialite', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  id: number;
  niveau: string;
  specialite: string;
  matiere: string
  
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, specialite: 'multimedia',  niveau: 'master',matiere:'info'},
  {id: 2, specialite: 'reseau',  niveau: '3eme',matiere:'physique'},
  {id: 3, specialite: 'reseau',  niveau: '3eme',matiere:'math'},
  {id: 4, specialite: 'multimedia',  niveau: '3eme',matiere:'phylo'}];




