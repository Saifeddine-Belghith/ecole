import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-editniveau',
  templateUrl: './editniveau.component.html',
  styleUrls: ['./editniveau.component.scss']
})
export class EditniveauComponent implements AfterViewInit {
  constructor() { }

  displayedColumns: string[] = ['id', 'niveau', 'specialite', 'action'];
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
  
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, specialite: 'multimedia',  niveau: 'master'},
  {id: 2, specialite: 'reseau',  niveau: '3eme'},
  {id: 3, specialite: 'reseau',  niveau: '3eme'},
  {id: 4, specialite: 'multimedia',  niveau: '3eme'}];



