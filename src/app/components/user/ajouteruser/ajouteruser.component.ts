import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PermissionService } from 'app/components/permission/permission/permission.service';
import { UserService } from '../service/user.service';
import { Roles } from 'app/components/role/role';

@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrls: ['./ajouteruser.component.scss']
})
export class AjouteruserComponent implements OnInit {

  formFieldHelpers: string[] = [''];
  role: number;
  roles: Roles[];
  photo: string;
   photoName: string='anonymous1.png';
  constructor(
    private router: Router
    ,private permissionsService: PermissionService
    ,private User:UserService ) {
      this.photo=this.User.PhotoUrl+this.photoName;
      const idCrud=1;
      const permission='create';
      const val={idCrud,permission};
      this.permissionsService.checkPerm(val).subscribe((res)=>{
        if(!res){this.router.navigateByUrl('error/403');}
      });
     }

  ngOnInit(): void {
    this.User.getRoleUser().subscribe((data) =>{
      this.roles=data;
    });
  }
  onSubmit(form: NgForm): void{
    const firstName= form.value['firstName'];
    const lastName= form.value['lastName'];
    const email= form.value['email'];
    const password= form.value['password'];
    const roleId=form.value['role'];
    const photoName=this.photoName;
    const val= {firstName,lastName,email,password,roleId,photoName};
	console.log(val);
    this.User.addUser(val).subscribe((res)=>{
      alert(res);
    });
  this.router.navigateByUrl('user/user-list');
 }
 uplodPhoto(event): void{
    const file = event.target.files[0];
    const formaData: FormData= new FormData();
    formaData.append('uploadedFile',file,file.name);
    this.User.uploadPhoto(formaData).subscribe((data: any)=>{
      this.photoName=data.toString();
      this.photo=this.User.PhotoUrl+this.photoName;
    });
  }
}
