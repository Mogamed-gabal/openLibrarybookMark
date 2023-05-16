import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCryptoComponent } from './trending-crypto.component';

describe('TrendingCryptoComponent', () => {
  let component: TrendingCryptoComponent;
  let fixture: ComponentFixture<TrendingCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
