import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressPluginsComponent } from './wordpress-plugins.component';

describe('WordpressPluginsComponent', () => {
  let component: WordpressPluginsComponent;
  let fixture: ComponentFixture<WordpressPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
