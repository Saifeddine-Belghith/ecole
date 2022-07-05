import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listemateriels',
  templateUrl: './listemateriels.component.html',
  styleUrls: ['./listemateriels.component.scss']
})
export class ListematerielsComponent implements AfterViewInit {

  displayedColumns: string[] = ['Titre','date', 'type', 'Description', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
  
type NewType = Date;

  export interface PeriodicElement {
    
    Titre: string;
    date:any ;
    type:string;
    Description: string;
  }
  
  
  
  const ELEMENT_DATA: PeriodicElement[] = [
    { Titre: 'fh', date :7/18/2015, type:'hjj',Description:'excellent'},
    { Titre:'ghh', date:9/13/2017, type: 'fgh',Description:'passable'},
    { Titre: 'hghjn',date:12/18/2004 , type: 'rtye',Description:'tres bien'}
  
  ];