import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressThemesComponent } from './wordpress-themes.component';

describe('WordpressThemesComponent', () => {
  let component: WordpressThemesComponent;
  let fixture: ComponentFixture<WordpressThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
