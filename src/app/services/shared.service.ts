import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  reloadComponent(router:Router) {
    const currentRoute = router.url;
    router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      router.navigate([currentRoute]);
    });
  }


  passwordControl() {//regex and password length

  }
}
