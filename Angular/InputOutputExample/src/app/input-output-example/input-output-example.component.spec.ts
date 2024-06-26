import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputExampleComponent } from './input-output-example.component';

describe('InputOutputExampleComponent', () => {
  let component: InputOutputExampleComponent;
  let fixture: ComponentFixture<InputOutputExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutputExampleComponent]
    });
    fixture = TestBed.createComponent(InputOutputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
