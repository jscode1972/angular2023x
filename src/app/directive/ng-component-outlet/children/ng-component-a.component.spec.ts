import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentAComponent } from './ng-component-a.component';

describe('NgComponentAComponent', () => {
  let component: NgComponentAComponent;
  let fixture: ComponentFixture<NgComponentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgComponentAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
