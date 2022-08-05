import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import swal from "sweetalert";

export default class Observer {
  constructor(
    private router: Router,
    private target?: string,
    private swal_display?: boolean
  ) {
    // this.target=null;
    // this.swal_display=false;
  }

  OBSERVER_POST() {
    return {
      next: (response: any) => {
        if (this.swal_display) swal("Success!", response.message, "success");
        if (this.target) this.router.navigate([this.target]);
      },
      error: (err: HttpErrorResponse) => {
        // if (this.swal_display)
        swal("Failure!", err.error.message, "warning");
      },
      // complete: () => console.log("Observer got a complete notification"),
    };
  }

  OBSERVER_VERIFY_ACCOUNT() {
    return {
      // next: (response: any) => {
      //   return;
      // },
      error: (err: Error) => {
        if (this.target) this.router.navigate([this.target]);
      },
      // complete: () => console.log("Observer got a complete notification"),
    };
  }

  OBSERVER_GET(cb) {
    return {
      next: (response: any) => {
        cb(response);
        // if (this.swal_display) swal("Success!", response.message, "success");
        // if (this.target) this.router.navigate([this.target]);
      },
      error: (err: HttpErrorResponse) => {
        swal("Failure!", err.error.message, "warning");
      },
      // complete: () => console.log("Observer got a complete notification"),
    };
  }
}
