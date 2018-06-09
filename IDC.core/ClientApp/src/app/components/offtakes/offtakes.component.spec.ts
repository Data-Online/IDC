import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfftakesComponent } from './offtakes.component';

describe('OfftakesComponent', () => {
  let component: OfftakesComponent;
  let fixture: ComponentFixture<OfftakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfftakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfftakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
