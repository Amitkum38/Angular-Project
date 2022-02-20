import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCommunicationComponent } from './data-communication.component';

describe('DataCommunicationComponent', () => {
  let component: DataCommunicationComponent;
  let fixture: ComponentFixture<DataCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
