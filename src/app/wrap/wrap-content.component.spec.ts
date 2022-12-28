import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapContentComponent } from './wrap-content.component';

describe('WrapContentComponent', () => {
  let component: WrapContentComponent;
  let fixture: ComponentFixture<WrapContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
