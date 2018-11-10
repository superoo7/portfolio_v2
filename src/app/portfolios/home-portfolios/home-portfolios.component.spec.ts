import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortfoliosComponent } from './home-portfolios.component';

describe('HomePortfoliosComponent', () => {
  let component: HomePortfoliosComponent;
  let fixture: ComponentFixture<HomePortfoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePortfoliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
