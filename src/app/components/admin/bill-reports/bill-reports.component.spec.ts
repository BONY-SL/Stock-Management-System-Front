import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillReportsComponent } from './bill-reports.component';

describe('BillReportsComponent', () => {
  let component: BillReportsComponent;
  let fixture: ComponentFixture<BillReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
