import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAttributeComponent } from './cust-attribute.component';

describe('CustAttributeComponent', () => {
  let component: CustAttributeComponent;
  let fixture: ComponentFixture<CustAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
