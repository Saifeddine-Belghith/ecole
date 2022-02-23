import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: 'app-editspecialite',
  templateUrl: './editspecialite.component.html',
  styleUrls: ['./editspecialite.component.scss']
})
export class EditspecialiteComponent implements AfterViewInit{

  constructor() { }

  displayedColumns: string[] = ['id', 'specialite', 'description', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  id: number;
  specialite: string;
  description: string;
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, specialite: 'Multimedia',  description: 'H'
},
  {id: 2, specialite: 'Réseaux',  description: 'He'},
  {id: 3, specialite: 'Multimedia',  description: 'Li'},
  {id: 4, specialite: 'Telecom',  description: 'Be'}];



