import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponentComponent } from './person-component.component';

describe('PersonComponentComponent', () => {
  let component: PersonComponentComponent;
  let fixture: ComponentFixture<PersonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
