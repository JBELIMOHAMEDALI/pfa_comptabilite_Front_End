import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verif-account',
  templateUrl: './verif-account.component.html',
  styleUrls: ['./verif-account.component.scss']
})
export class VerifAccountComponent implements OnInit {

  validation:boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.validation=false;
  }

  ngOnInit() {
    this.validateAccount();
  }
  async validateAccount() {
    // const hashedid = this.activatedRoute.snapshot.paramMap.get("hashedid")
    // try {
    //   (await this.authService.validate(hashedid)) as any;
    //   this.validation=true;
    // } catch (error) {
    //   this.router.navigate(['/introuvable'])
    // }
  }

}
