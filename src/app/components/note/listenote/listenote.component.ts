import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-listenote',
  templateUrl: './listenote.component.html',
  styleUrls: ['./listenote.component.scss']
})
export class ListenoteComponent  implements AfterViewInit{

  constructor() { }
  displayedColumns: string[] = ['eleve','Baréme', 'Note', 'Remarque', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  eleve: string;
  Bareme : number;
  Note:number;
  Remarque: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {eleve: 'mohamed', Bareme: 20,  Note: 15,Remarque:'excellent'},
  {eleve: 'ali', Bareme: 20,  Note: 10,Remarque:'passable'},
  {eleve: 'nihel', Bareme: 20,  Note: 17,Remarque:'tres bien'}

];