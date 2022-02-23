import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressSettingsComponent } from './wordpress-settings.component';

describe('WordpressSettingsComponent', () => {
  let component: WordpressSettingsComponent;
  let fixture: ComponentFixture<WordpressSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
