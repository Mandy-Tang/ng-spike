import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MxgraphPageComponent } from './mxgraph-page.component';

describe('MxgraphPageComponent', () => {
  let component: MxgraphPageComponent;
  let fixture: ComponentFixture<MxgraphPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MxgraphPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MxgraphPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
