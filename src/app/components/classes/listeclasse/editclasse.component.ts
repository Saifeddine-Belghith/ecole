import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-editclasse',
  templateUrl: './editclasse.component.html',
  styleUrls: ['./editclasse.component.scss']
})
export class EditclasseComponent implements AfterViewInit  {

  constructor() { }

  displayedColumns: string[] = ['id','classe', 'niveau', 'specialite', 'action'];
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
  classe: string
  
  
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, specialite: 'multimedia',  niveau: 'master',classe:'2lm1'},
  {id: 2, specialite: 'reseau',  niveau: '3eme',classe:'3lt1'},
  {id: 3, specialite: 'reseau',  niveau: '3eme',classe:'1lm1'},
  {id: 4, specialite: 'multimedia',  niveau: '3eme',classe:'2lm2'}];



