import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PermissionService } from 'app/components/permission/permission/permission.service';
import { UserService } from '../service/user.service';
import { CheckPer } from 'app/components/permission/CheckPer';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.scss']
})
export class ListeuserComponent implements OnInit {

  delete: boolean=false;
  update: boolean=false;
  value= '';
  add:CheckPer;
  create: boolean=false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ELEMENT_DATA!: any[];
  constructor(private User:UserService ,
    private router: Router
    ,private permissionsService: PermissionService){
      const idCrud=1;
      const permission='read';
      const val={idCrud,permission};
      this.permissionsService.checkPerm(val).subscribe((res)=>{
        if(!res){this.router.navigateByUrl('error/403');}
      });
    }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  displayedColumns: string[] = ['id', 'firstName', 'lastName','role','email','action'];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  dataSource: MatTableDataSource<any>;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    ngOnInit(): void {

      const idCrud=1;
      const permission='delete';
      const val={idCrud,permission};
      this.permissionsService.checkPerm(val).subscribe((res)=>{
        if(!res){this.delete=true;}
      });
      this.add=new CheckPer();
      this.add.idCrud=1;
      this.add.permission='create';
      this.permissionsService.checkPerm(this.add).subscribe((res)=>{
        if(!res){this.create=true;}
      });
         this.ngAfterViewInit();
  }
  ngAfterViewInit(): void {

      const idCrud=1;
      const permission='update';
      const val={idCrud,permission};
      this.permissionsService.checkPerm(val).subscribe((res)=>{
        if(!res){this.update=true;}
      });

     this.User.getUser().subscribe((data) =>{
      this.ELEMENT_DATA=data;
      this.dataSource= new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;

    });

  }

  applyFilter(): void {
    this.dataSource.filter =this.value.trim().toLocaleLowerCase();
  }
  addUser(): void{
    this.router.navigateByUrl('user/user-add');
  }
  onDelete(id: number): void{
    this.User.deleteUser(id).subscribe((res)=>{
      alert(res);
      this.ngAfterViewInit();
    });

}
  onEdit(id: number): void{
    this.router.navigateByUrl(`/user-edit/${id}`);
  }
}
