import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapTemplateComponent } from './wrap-template.component';

describe('WrapTemplateComponent', () => {
  let component: WrapTemplateComponent;
  let fixture: ComponentFixture<WrapTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
