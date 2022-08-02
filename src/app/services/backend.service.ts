import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
     private httpClient: HttpClient) { }

    //  login_fn(email: string, mot_passe: string) {
    //   const obj={email:email,mot_passe:mot_passe}
    //    return this.httpClient.post("http://127.0.0.1:3000/auth/login",obj);
    //    }
    //    addUser(obj:any){
    //     return this.httpClient.post("http://127.0.0.1:3000/users/add",obj);
    //    }

       reloadComponent() {
        const currentRoute = this.router.url;
        this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
          this.router.navigate([currentRoute]);
        });
      }
      delete(id: string, point: any) {
        return this.httpClient.delete(environment.apiUrl + `${point}/delete/${id}`);
      }
      get(point: any) {
        return this.httpClient.get(environment.apiUrl + point + "/get");
      }
      post(object: any, point: any) {
        // alert(JSON.stringify(object))
        return this.httpClient.post(environment.apiUrl + point + "/post", object);
      }
      patch(object: any, point: any,rederect?:boolean,pageRederect?:string) {
        return this.httpClient.patch(environment.apiUrl + `${point}/update/${object.id}`, object).
          subscribe({
            next: (data) => {
              this.modalService.dismissAll();
              swal('Success', '', 'success');
              if(!rederect){ this.reloadComponent()}else{this.router.navigate([pageRederect]);}

            }, error: () => {
              this.modalService.dismissAll();
              swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
            }
          });
      }


}
