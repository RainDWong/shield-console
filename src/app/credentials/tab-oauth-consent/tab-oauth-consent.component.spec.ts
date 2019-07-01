import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOauthConsentComponent } from './tab-oauth-consent.component';

describe('TabOauthConsentComponent', () => {
  let component: TabOauthConsentComponent;
  let fixture: ComponentFixture<TabOauthConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOauthConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOauthConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
