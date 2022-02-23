import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressPostsComponent } from './wordpress-posts.component';

describe('WordpressPostsComponent', () => {
  let component: WordpressPostsComponent;
  let fixture: ComponentFixture<WordpressPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
