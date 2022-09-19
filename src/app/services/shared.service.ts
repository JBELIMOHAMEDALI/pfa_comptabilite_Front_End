import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BackendService } from "./backend.service";
import { GET_USER_SELECTED_COMPANY_END_POINT } from "./endpoints";
import Observer from "./observer";
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  constructor(private backendservice: BackendService, private router: Router) {}

  reloadComponent(router: Router) {
    const currentRoute = router.url;
    router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      router.navigate([currentRoute]);
    });
  }


  passwordControl() {
    //regex and password length
  }

  // getStoredCompany() {
  //   const id_company = localStorage.getItem("COMPANY");
  //   if (!id_company) {
  //     this.backendservice.get(GET_USER_SELECTED_COMPANY_END_POINT).subscribe(
  //       new Observer().OBSERVER_GET((response) => {
  //         if (!response.err&&response.rows[0]) {
  //           localStorage.setItem(
  //             "COMPANY",
  //             (response.rows[0].id_company)
  //           );
  //         }
  //       })
  //     );
  //   }
  //   return localStorage.getItem("COMPANY");
  // }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  deleteItem(key: string) {
    localStorage.removeItem(key);
  }
  getSelectedCompany(cb) {
    const id = localStorage.getItem("companyNo");
    if (!id) {
      this.backendservice.get(GET_USER_SELECTED_COMPANY_END_POINT).subscribe(
        new Observer().OBSERVER_GET((response) => {
          if (!response.err && response.rows[0]) {
            localStorage.setItem("companyNo", response.rows[0].id_company);
            cb(response.rows[0].id_company)
          }
        })
      );
    } else {
      cb(id);
    }
  }
}
