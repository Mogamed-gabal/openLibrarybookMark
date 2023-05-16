import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingJavaComponent } from './trending-java.component';

describe('TrendingJavaComponent', () => {
  let component: TrendingJavaComponent;
  let fixture: ComponentFixture<TrendingJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
