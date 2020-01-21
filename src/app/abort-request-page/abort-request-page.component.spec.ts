import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbortRequestPageComponent } from './abort-request-page.component';

describe('AbortRequestPageComponent', () => {
  let component: AbortRequestPageComponent;
  let fixture: ComponentFixture<AbortRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbortRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbortRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
