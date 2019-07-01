import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDomainVerfComponent } from './tab-domain-verf.component';

describe('TabDomainVerfComponent', () => {
  let component: TabDomainVerfComponent;
  let fixture: ComponentFixture<TabDomainVerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDomainVerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDomainVerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
