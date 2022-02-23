import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressPagesComponent } from './wordpress-pages.component';

describe('WordpressPagesComponent', () => {
  let component: WordpressPagesComponent;
  let fixture: ComponentFixture<WordpressPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
