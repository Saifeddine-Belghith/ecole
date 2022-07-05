import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PermissionService } from 'app/components/permission/permission/permission.service';
import { Roles } from 'app/components/role/role';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.scss']
})
export class ModifieruserComponent implements OnInit {

  id: string;
  roles: Roles[];
  photo: string;
  photoName: string;
 formFieldHelpers: string[] = [''];
 form= new FormGroup({
   firstName: new FormControl('',Validators.required),
   lastName: new FormControl('',Validators.required),
   email: new FormControl('',Validators.required),
   password: new FormControl('',Validators.required),
   roleId: new FormControl('',Validators.required),
 });

 constructor(private User:UserService ,
   private router: Router, private route: ActivatedRoute
   ,private permissionsService: PermissionService ) {
     this.route.params.subscribe((params: Params) => {
         this.id = params['id'];});
     const idCrud=1;
     const permission='update';
     const val={idCrud,permission};
     this.permissionsService.checkPerm(val).subscribe((res)=>{
       if(!res){this.router.navigateByUrl('error/403');}
     });
    }

 ngOnInit(): void {
   this. User.getRoleUser().subscribe((data) =>{
     this.roles=data;
   });

    this. User.getUserId(this.id).subscribe((res)=>{
       this.photo=this. User.PhotoUrl+res[0].photoName;
       this.photoName=res[0].photoName;
     this.form.setValue({
    firstName: res[0].UserFirstName,
    lastName: res[0].UserLastName,
    email: res[0].UserEmail,
    password: res[0].UserPassword,
    roleId: res[0].roleId,
  });
  });
 }

 onSubmit(): void{
  const firstName= this.form.get('firstName').value;
   const lastName= this.form.get('lastName').value;
   const email= this.form.get('email').value;
   const password= this.form.get('password').value;
   const roleId= this.form.get('roleId').value;
   const photoName=this.photoName;
   const id=this.id;
   const val= {id,firstName,lastName,email,password,roleId,photoName};
    this. User.update(val).subscribe((res)=>{
     alert(res);
   });
   this.router.navigateByUrl('user/user-list');
 }
 uplodPhoto(event): void{
   const file = event.target.files[0];
   const formaData: FormData= new FormData();
   formaData.append('uploadedFile',file,file.name);
   this. User.uploadPhoto(formaData).subscribe((data: any)=>{
     this.photoName=data.toString();
     this.photo=this. User.PhotoUrl+this.photoName;
   });
 }
}
