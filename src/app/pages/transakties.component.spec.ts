import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaktiesComponent } from './transakties.component';

describe('TransaktiesComponent', () => {
  let component: TransaktiesComponent;
  let fixture: ComponentFixture<TransaktiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaktiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaktiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
