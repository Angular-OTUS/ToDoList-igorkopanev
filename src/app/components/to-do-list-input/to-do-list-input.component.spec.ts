import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListInputComponent } from './to-do-list-input.component';

describe('ToDoListInputComponent', () => {
  let component: ToDoListInputComponent;
  let fixture: ComponentFixture<ToDoListInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
