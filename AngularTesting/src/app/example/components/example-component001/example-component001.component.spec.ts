import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent001Component } from './example-component001.component';

describe('ExampleComponent001Component', () => {
  let component: ExampleComponent001Component;
  let fixture: ComponentFixture<ExampleComponent001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
