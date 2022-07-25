import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class SharedServService {

  constructor(private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
     private httpClient: HttpClient) { }

     getAllfromTab(nomTab:string) {
      let param1 = new HttpParams;
      param1 = param1.set('tabname',nomTab);
      return this.httpClient.get("/Generale/get_all_Generale",{params:param1});
    }
    reloadComponent() {
      const currentRoute = this.router.url;
      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]);
      });
    }
    deleteFromTab(id: string,tabname :string,nomId :string) {
      let param1 = new HttpParams;
      param1 = param1.set("id", id);
      param1 = param1.set("tabname", tabname);
      param1 = param1.set("nomId", nomId);
      return this.httpClient.post("http://127.0.0.1/p_agonce_api/Generale/delete_generale", param1);
    }
    getOneFromTab(tabname:string,id:string,nomId:string) {
      let param1 = new HttpParams;
      param1 = param1.set("id", id);
      param1 = param1.set("tabname", tabname);
      param1 = param1.set("nomId", nomId);
      return this.httpClient.get("http://127.0.0.1/p_agonce_api/Generale/get_One_Generale_By_ID",{params:param1});
    }
}
