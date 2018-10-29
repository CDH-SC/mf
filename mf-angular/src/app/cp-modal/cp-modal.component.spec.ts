import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpModalComponent } from './cp-modal.component';

describe('CpModalComponent', () => {
  let component: CpModalComponent;
  let fixture: ComponentFixture<CpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
