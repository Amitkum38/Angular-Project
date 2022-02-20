import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComonentTwoComponent } from './app-comonent-two.component';

describe('AppComonentTwoComponent', () => {
  let component: AppComonentTwoComponent;
  let fixture: ComponentFixture<AppComonentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComonentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComonentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
