import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import swal from "sweetalert";

export default class Observer {
  constructor(
    private router: Router,
    private target?: string,
    private swal_display?: boolean
  ) {
  }

  OBSERVER_POST(cb?) {
    return {
      next: (response: any) => {
        if (this.swal_display) swal("Success!", response.message, "success");
        if (this.target) this.router.navigate([this.target]);
        cb(response)
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
        cb(err);
        // swal("Failure!", err.error.message, "warning");
      },
      // complete: () => console.log("Observer got a complete notification"),
    };
  }
  OBSERVER_RESET(cb?) {

    return {
      next: (response: any) => {
        if (cb) cb(true,response);
        if (this.swal_display) swal("Success!", response.message, "success");
        if (this.target) this.router.navigate([this.target]);
      },
      error: (err: HttpErrorResponse) => {
        if (cb) cb(false,err);
        swal("Failure!", err.error.message, "warning");
      },
      // complete: () => console.log("Observer got a complete notification"),
    };
  }
}
