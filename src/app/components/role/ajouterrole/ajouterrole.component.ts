import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PermissionService } from 'app/components/permission/permission/permission.service';
import { RoleService } from '../role/role.service';

@Component({
  selector: 'app-ajouterrole',
  templateUrl: './ajouterrole.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AjouterroleComponent {
  formFieldHelpers: string[] = [''];
  constructor(private roleService:RoleService,private router: Router
      ,private permissionsService: PermissionService) {
      const idCrud=3;
      const permission='create';
      const val={idCrud,permission};
      this.permissionsService.checkPerm(val).subscribe((res)=>{
        if(!res){this.router.navigateByUrl('error/403');}
      }); }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void{
    const title=form.value['title'];
    const description=form.value['description'];
    const role={title,description};
    this.roleService.addRole(role).subscribe((res)=>{
      alert(res);
	this.router.navigateByUrl('role/role-list');
    });
  }
}
