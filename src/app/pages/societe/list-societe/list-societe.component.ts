import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-societe',
  templateUrl: './list-societe.component.html',
  styleUrls: ['./list-societe.component.scss']
})
export class ListSocieteComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open() {
    const modalRef = this.modalService.open("PopupComponent");
    modalRef.componentInstance.name = 'Hanen';
  }
}
