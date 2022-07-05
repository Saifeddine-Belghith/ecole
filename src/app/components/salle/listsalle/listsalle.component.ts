import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-listsalle',
  templateUrl: './listsalle.component.html',
  styleUrls: ['./listsalle.component.scss']
})
export class ListsalleComponent implements AfterViewInit {

  constructor() { }
  displayedColumns: string[] = ['id','Titre', 'Etat', 'Ouvert', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  id: number;
  Titre: string;
 Etat: string;
 Ouvert: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, Titre: 'S1',  Etat: 'bonne',Ouvert:'oui'},
  {id: 2, Titre: 'S2',  Etat: 'bonne',Ouvert:'non'},
  {id: 3, Titre: 'S3',  Etat: 'mauvaise',Ouvert:'oui'}
  

];