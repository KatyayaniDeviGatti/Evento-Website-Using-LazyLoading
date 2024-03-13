import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyloadingService {

  constructor(private http:HttpClient) { }

  postRegisterData(data:any){
    return this.http.post('http://localhost:3000/register',data)
  }

  validateUser(UserName:any,Password:any){
    return this.http.get(`http://localhost:3000/register?UserName=`+UserName+"&Password="+Password)
 }

 getServicesData(){
  return this.http.get('http://localhost:3000/services')
 }

}
