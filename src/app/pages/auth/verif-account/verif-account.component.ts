import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VERIFY_ACCOUNT_END_POINT } from '../../../services/endpoints';
import Observer from '../../../services/observer';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-verif-account',
  templateUrl: './verif-account.component.html',
  styleUrls: ['./verif-account.component.scss']
})
export class VerifAccountComponent implements OnInit {

  validation:boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    public backendService:BackendService
  ) {
    this.validation=false;
  }

  ngOnInit() {
    this.validateAccount();
  }
  async validateAccount() {
    const hashedid = this.activatedRoute.snapshot.paramMap.get("hashedid");
    this.backendService
    .get(`${VERIFY_ACCOUNT_END_POINT}/${hashedid}`)
    .subscribe(new Observer(this.router,"/notfound",false).OBSERVER_VERIFY_ACCOUNT);
    // try {
    //   (await this.authService.validate(hashedid)) as any;
    //   this.validation=true;
    // } catch (error) {
    //   this.router.navigate(['/introuvable'])
    // }
  }

}
