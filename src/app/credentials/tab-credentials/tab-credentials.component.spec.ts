import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCredentialsComponent } from './tab-credentials.component';

describe('TabCredentialsComponent', () => {
  let component: TabCredentialsComponent;
  let fixture: ComponentFixture<TabCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
