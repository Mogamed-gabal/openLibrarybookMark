import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingHarryComponent } from './trending-harry.component';

describe('TrendingHarryComponent', () => {
  let component: TrendingHarryComponent;
  let fixture: ComponentFixture<TrendingHarryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingHarryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingHarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
