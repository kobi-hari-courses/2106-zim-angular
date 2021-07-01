import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJokeComponent } from './edit-joke.component';

describe('EditJokeComponent', () => {
  let component: EditJokeComponent;
  let fixture: ComponentFixture<EditJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
