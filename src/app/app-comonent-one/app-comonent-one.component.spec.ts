import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComonentOneComponent } from './app-comonent-one.component';

describe('AppComonentOneComponent', () => {
  let component: AppComonentOneComponent;
  let fixture: ComponentFixture<AppComonentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComonentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComonentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
