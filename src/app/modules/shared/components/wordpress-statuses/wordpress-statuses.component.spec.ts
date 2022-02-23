import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressStatusesComponent } from './wordpress-statuses.component';

describe('WordpressStatusesComponent', () => {
  let component: WordpressStatusesComponent;
  let fixture: ComponentFixture<WordpressStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressStatusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
