import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentBComponent } from './ng-component-b.component';

describe('NgComponentBComponent', () => {
  let component: NgComponentBComponent;
  let fixture: ComponentFixture<NgComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgComponentBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
