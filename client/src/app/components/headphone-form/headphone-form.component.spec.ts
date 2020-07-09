import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneFormComponent } from './headphone-form.component';

describe('HeadphoneFormComponent', () => {
  let component: HeadphoneFormComponent;
  let fixture: ComponentFixture<HeadphoneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadphoneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
