import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressMediaComponent } from './wordpress-media.component';

describe('WordpressMediaComponent', () => {
  let component: WordpressMediaComponent;
  let fixture: ComponentFixture<WordpressMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
