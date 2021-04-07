import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementSampleWebPartComponent } from './angular-element-sample-web-part.component';

describe('AngularElementSampleWebPartComponent', () => {
  let component: AngularElementSampleWebPartComponent;
  let fixture: ComponentFixture<AngularElementSampleWebPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularElementSampleWebPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElementSampleWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
