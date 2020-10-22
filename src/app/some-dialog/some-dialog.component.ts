import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AnotherDialogComponent } from '../another-dialog/another-dialog.component';

@Component({
  selector: 'app-some-dialog',
  templateUrl: './some-dialog.component.html',
  styleUrls: ['./some-dialog.component.scss']
})
export class SomeDialogComponent implements OnInit {

  constructor(private modalService: BsModalService, private _modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  close() {
    this._modalRef.hide();
  }

  openSecondDialog() {
    this.modalService.show(AnotherDialogComponent);
    return false;
  }
}
