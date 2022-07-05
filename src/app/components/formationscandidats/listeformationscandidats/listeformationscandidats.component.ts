import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listeformationscandidats',
  templateUrl: './listeformationscandidats.component.html',
  styleUrls: ['./listeformationscandidats.component.scss']
})
export class ListeformationscandidatsComponent implements AfterViewInit {

  constructor() { }
  displayedColumns: string[] = ['eleve','Titre', 'type', 'Description', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  eleve: string;
  Titre: string;
  type:string;
  Description: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {eleve: 'mohamed', Titre: 'fh',  type:'hjj',Description:'excellent'},
  {eleve: 'ali', Titre:'ghh',  type: 'fgh',Description:'passable'},
  {eleve: 'nihel', Titre: 'hghjn', type: 'rtye',Description:'tres bien'}

];