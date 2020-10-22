import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDialogComponent } from './another-dialog.component';

describe('AnotherDialogComponent', () => {
  let component: AnotherDialogComponent;
  let fixture: ComponentFixture<AnotherDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
