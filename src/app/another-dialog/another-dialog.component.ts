import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-another-dialog',
  templateUrl: './another-dialog.component.html',
  styleUrls: ['./another-dialog.component.scss']
})
export class AnotherDialogComponent implements OnInit {

  constructor(private _modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  close() {
    this._modalRef.hide();
  }
}
