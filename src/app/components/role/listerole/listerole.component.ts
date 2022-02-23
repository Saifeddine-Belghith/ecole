import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";



@Component({
  selector: 'app-listerole',
  templateUrl: './listerole.component.html',
  styleUrls: ['./listerole.component.scss']
})
export class ListeroleComponent implements AfterViewInit {

  constructor() { }

  displayedColumns: string[] = ['id', 'titre', 'description', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  id: number;
  titre: string;
  description: string;
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, titre: 'Administrateur',  description: 'H'
},
  {id: 2, titre: 'Utilisateur',  description: 'He'},
  {id: 3, titre: 'Lithium',  description: 'Li'},
  {id: 4, titre: 'Beryllium',  description: 'Be'}];



