import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServService } from './../../../service/shared-serv.service';
import swal from 'sweetalert';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-delete-all-from-tab',
  templateUrl: './delete-all-from-tab.component.html',
  styleUrls: ['./delete-all-from-tab.component.scss']
})
export class DeleteAllFromTabComponent implements OnInit {
  @Input() titre;
  @Input() id;
  constructor(public activeModal: NgbActiveModal,private shared:SharedServService ,private serv_shared:SharedServService,
    private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
  }
  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
  deleteyes(){
   this.shared.DeleteAll(this.id,"societe").subscribe({
    next:(data)=>{
      this.modalService.dismissAll();
      this.reloadComponent();
      swal('Success', '', 'success');
    }
    ,error:()=>{
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
    }
  })
  }
}
