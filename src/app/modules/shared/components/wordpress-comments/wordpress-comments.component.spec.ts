import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressCommentsComponent } from './wordpress-comments.component';

describe('WordpressCommentsComponent', () => {
  let component: WordpressCommentsComponent;
  let fixture: ComponentFixture<WordpressCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
