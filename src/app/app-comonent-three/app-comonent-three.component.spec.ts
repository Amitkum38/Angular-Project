import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComonentThreeComponent } from './app-comonent-three.component';

describe('AppComonentThreeComponent', () => {
  let component: AppComonentThreeComponent;
  let fixture: ComponentFixture<AppComonentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComonentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComonentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
