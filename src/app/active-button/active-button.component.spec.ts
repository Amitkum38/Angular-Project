import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveButtonComponent } from './active-button.component';

describe('ActiveButtonComponent', () => {
  let component: ActiveButtonComponent;
  let fixture: ComponentFixture<ActiveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
