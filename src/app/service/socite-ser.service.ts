import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../../environments/environment.prod';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class SociteSerService {
  constructor(private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
     private httpClient: HttpClient) { }

    //  update_socite(obj){
    //   return this.httpClient.put("",obj);
    //  }


    reloadComponent() {
      const currentRoute = this.router.url;
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
      });
    }
    DeleteAll(id: string, point: any) {
      return this.httpClient.delete(environment.apiUrl + `${point}/delete/${id}`);
    }
    getAllArticle(point: any) {
      return this.httpClient.get(environment.apiUrl + point + "/get");
    }
    addAll(object: any, point: any) {
      // alert(JSON.stringify(object))
      return this.httpClient.post(environment.apiUrl + point + "/post", object);
    }
    UpdateAll(object: any, point: any,rederect?:boolean,pageRederect?:string) {
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
