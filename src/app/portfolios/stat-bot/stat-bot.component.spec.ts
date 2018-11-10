import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatBotComponent } from './stat-bot.component';

describe('StatBotComponent', () => {
  let component: StatBotComponent;
  let fixture: ComponentFixture<StatBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
