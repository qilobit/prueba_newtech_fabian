import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeadphoneBtnComponent } from './new-headphone-btn.component';

describe('NewHeadphoneBtnComponent', () => {
  let component: NewHeadphoneBtnComponent;
  let fixture: ComponentFixture<NewHeadphoneBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHeadphoneBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeadphoneBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
