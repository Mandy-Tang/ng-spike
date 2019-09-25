import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollTreePageComponent } from './virtual-scroll-tree-page.component';

describe('VirtualScrollTreePageComponent', () => {
  let component: VirtualScrollTreePageComponent;
  let fixture: ComponentFixture<VirtualScrollTreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollTreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
