import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressUsersComponent } from './wordpress-users.component';

describe('WordpressUsersComponent', () => {
  let component: WordpressUsersComponent;
  let fixture: ComponentFixture<WordpressUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
