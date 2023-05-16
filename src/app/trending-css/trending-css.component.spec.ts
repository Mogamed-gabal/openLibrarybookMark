import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCssComponent } from './trending-css.component';

describe('TrendingCssComponent', () => {
  let component: TrendingCssComponent;
  let fixture: ComponentFixture<TrendingCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
