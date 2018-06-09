import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfftakeViewerComponent } from './offtake-viewer.component';

describe('OfftakeViewerComponent', () => {
  let component: OfftakeViewerComponent;
  let fixture: ComponentFixture<OfftakeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfftakeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfftakeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
