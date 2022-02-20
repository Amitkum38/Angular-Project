import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComonentFourComponent } from './app-comonent-four.component';

describe('AppComonentFourComponent', () => {
  let component: AppComonentFourComponent;
  let fixture: ComponentFixture<AppComonentFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComonentFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComonentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
