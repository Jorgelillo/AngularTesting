import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent01Component } from './example-component01.component';

describe('ExampleComponent01Component', () => {
  let component: ExampleComponent01Component;
  let fixture: ComponentFixture<ExampleComponent01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
