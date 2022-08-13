import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from './backend.service';
import { GET_USER_FIRST_COMPANY_END_POINT } from './endpoints';
import Observer from './observer';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private backendservice:BackendService) { }

  reloadComponent(router:Router) {
    const currentRoute = router.url;
    router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      router.navigate([currentRoute]);
    });
  }


  passwordControl() {//regex and password length

  }

  getStoredCompany(){
    const id_company=sessionStorage.getItem('id_company');
    if(!id_company){
      this.backendservice.get(GET_USER_FIRST_COMPANY_END_POINT).subscribe(
        new Observer().OBSERVER_GET((response) => {
          if (!response.err){
            sessionStorage.setItem('id_company',response.rows[0].id_company);
          }

        })
      )
    }
    return sessionStorage.getItem('id_company')
  }
}
