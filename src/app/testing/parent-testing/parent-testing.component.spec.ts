import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTestingComponent } from './parent-testing.component';

describe('ParentTestingComponent', () => {
  let component: ParentTestingComponent;
  let fixture: ComponentFixture<ParentTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
