import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../../environments/environment.prod';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class SharedServService {

  constructor(private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
     private httpClient: HttpClient) { }

    reloadComponent() {
      const currentRoute = this.router.url;
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
      });
    }
    getAll(point: any) {
      return this.httpClient.get(environment.apiUrl + point + "/get");
    }
    getOneFromTab(tabname:string,id:string,nomId:string,point:string) {
      let param1 = new HttpParams;
      param1 = param1.set("id", id);
      param1 = param1.set("tabname", tabname);
      param1 = param1.set("nomId", nomId);
      return this.httpClient.get(environment.apiUrl +point+"/get_one_by_id",{params:param1});
    }
    addAll(object: any, point: any) {
      // alert(JSON.stringify(object))
      return this.httpClient.post(environment.apiUrl + point + "/add", object);
    }
    UpdateAll(object: any, point: any,rederect?:boolean,pageRederect?:string) {
      return this.httpClient.put(environment.apiUrl + `${point}/update`,object).
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
    DeleteAll(id: string, point: any) {
      return this.httpClient.delete(environment.apiUrl + `${point}/delete/${id}`);
    }




}
