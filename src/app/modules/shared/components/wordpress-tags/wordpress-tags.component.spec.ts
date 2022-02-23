import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressTagsComponent } from './wordpress-tags.component';

describe('WordpressTagsComponent', () => {
  let component: WordpressTagsComponent;
  let fixture: ComponentFixture<WordpressTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
