import { Component } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { SomeDialogComponent } from './some-dialog/some-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalService: BsModalService) { }

  openMainDialog() {
    this.modalService.show(SomeDialogComponent);
  }
}
