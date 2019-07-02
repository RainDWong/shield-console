import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApikeyComponent } from './edit-apikey.component';

describe('EditApikeyComponent', () => {
  let component: EditApikeyComponent;
  let fixture: ComponentFixture<EditApikeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditApikeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApikeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
