import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  readonly Apiurl="https://localhost:7076/api";//ra9em bech yetbadel selon pc 

  constructor(private Http:HttpClient) { }


    getRole():Observable<any[]>{
      return this.Http.get<any[]>(this.Apiurl+'/Role');
    }

    addRole(val:any):any{
       return this.Http.post(this.Apiurl+'/Role',val);//esm modele lzm Role w controle Rolecontroleer
    }

    updateRole(val:any):any{
      return this.Http.put(this.Apiurl+'/Role',val);
    }

    deleteRole(val:any):any{
      return this.Http.delete(this.Apiurl+'/Role/'+val);
    }

    getRoleById(val:any):any{
      return this.Http.get(this.Apiurl+'/Role/'+val);
    }
  }

