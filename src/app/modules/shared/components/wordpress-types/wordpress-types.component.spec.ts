import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressTypesComponent } from './wordpress-types.component';

describe('WordpressTypesComponent', () => {
  let component: WordpressTypesComponent;
  let fixture: ComponentFixture<WordpressTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
