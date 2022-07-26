import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
}) 
export class LoginServiceService {

  constructor(private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
     private httpClient: HttpClient) { }

     //send email and password and check it and return result
     login_fn(email: string, mot_passe: string) {
    const obj={email:email,mot_passe:mot_passe}
   // alert(environment.apiUrl);
     return this.httpClient.post("http://127.0.0.1:3000/auth/login",obj);
     }
     addUser(obj:any){
      return this.httpClient.post("http://127.0.0.1:3000/users/add",obj);
     }
}
