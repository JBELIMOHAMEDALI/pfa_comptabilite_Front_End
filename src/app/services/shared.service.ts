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
  constructor(private backendservice: BackendService) {}

  reloadComponent(router: Router) {
    const currentRoute = router.url;
    router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      router.navigate([currentRoute]);
    });
  }

  passwordControl() {
    //regex and password length
  }

  getStoredCompany() {
    const id_company = localStorage.getItem("COMPANY");
    if (!id_company) {
      this.backendservice.get(GET_USER_SELECTED_COMPANY_END_POINT).subscribe(
        new Observer().OBSERVER_GET((response) => {
          if (!response.err&&response.rows[0]) {
            localStorage.setItem(
              "COMPANY",
              (response.rows[0].id_company)
            );
          }
        })
      );
    }
    return localStorage.getItem("COMPANY");
  }

  updateStoredCompany(id_company: string) {
    localStorage.setItem("COMPANY", id_company);
  }
  deleteStoredCompany() {
    localStorage.removeItem("COMPANY");
  }

  // encrypt(value: string): string {
  //   return CryptoJS.AES.encrypt(value, "skey").toString();
  // }

  // decrypt(textToDecrypt: string) {
  //   return CryptoJS.AES.decrypt(textToDecrypt, "skey").toString(
  //     CryptoJS.enc.Utf8
  //   );
  // }
}
