import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTableValueComponent } from './array-table-value.component';

describe('ArrayTableValueComponent', () => {
  let component: ArrayTableValueComponent;
  let fixture: ComponentFixture<ArrayTableValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayTableValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayTableValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
