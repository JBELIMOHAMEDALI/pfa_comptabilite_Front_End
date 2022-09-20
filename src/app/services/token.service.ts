import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken(key:string){
    return localStorage.getItem(key);
  }
  saveToken(key:string,token:string){
    localStorage.setItem(key,token);
  }
  removeToken(key:string){
    localStorage.removeItem(key)
  }
  LoggedIn(){
    // const accessToken=localStorage.getItem('accessToken');
    return !!localStorage.getItem('refreshToken');
    // if(!accessToken||!refreshToken){
    //   return false
    // }else{
    //   return true
    // }
  }

}
