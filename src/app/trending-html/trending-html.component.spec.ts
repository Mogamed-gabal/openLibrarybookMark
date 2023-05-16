import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingHtmlComponent } from './trending-html.component';

describe('TrendingHtmlComponent', () => {
  let component: TrendingHtmlComponent;
  let fixture: ComponentFixture<TrendingHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
