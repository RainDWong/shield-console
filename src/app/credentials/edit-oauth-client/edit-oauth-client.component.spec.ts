import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOauthClientComponent } from './edit-oauth-client.component';

describe('EditOauthClientComponent', () => {
  let component: EditOauthClientComponent;
  let fixture: ComponentFixture<EditOauthClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOauthClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOauthClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
