import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import swal from "sweetalert";

export default class Observer {
  constructor(
    private router: Router,
    private target: string,
    private swal_display: boolean
  ) {}

  public OBSERVER_POST = {
    next: (response: any) => {
      if (this.swal_display) swal("Success!", response.message, "success");
      if (this.target) this.router.navigate([this.target]);
    },
    error: (err: HttpErrorResponse) => {
      swal("Failure!", err.error.message, "warning");
    },
    // complete: () => console.log("Observer got a complete notification"),
  };

  public OBSERVER_VERIFY = {
    // next: (response: any) => {
    //   return;
    // },
    error: (err: Error) => {
      if (this.target) this.router.navigate([this.target]);
    },
    // complete: () => console.log("Observer got a complete notification"),
  };

}
