import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly ApiUrl= 'https://localhost:7072/api';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly PhotoUrl= 'https://localhost:7072/Assests/Users/';// url men fichier config njibou les lien 
  constructor(private http: HttpClient ){}
  getUser(): Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+'/Users');
  }

  addUser(val: any): any{
    return this.http.post(this.ApiUrl+'/Users',val);
  }
 
  checkPerm(val: any): any{
    return this.http.post(this.ApiUrl+'/Users',val);
  }
  CheckPer({ val }: { val: any; }): any{
    return this.http.post(this.ApiUrl+'/Users',val);
  }

  update(val: any): any{
    return this.http.put(this.ApiUrl+'/Users',val);
  }


  deleteUser(val: any): any{
    return this.http.delete(this.ApiUrl+'/Users/'+val);
  }
  getUserId(val: any): any{
    return this.http.get(this.ApiUrl+'/Users/'+val);
  }

  uploadPhoto(val: any): any{
    return this.http.post(this.ApiUrl+'/Users/SaveFile',val);
  }
  getRoleUser(): Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+'/Users/getRoleUser');
  }
}

