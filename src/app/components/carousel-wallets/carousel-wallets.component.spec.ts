import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWalletsComponent } from './carousel-wallets.component';

describe('CarouselWalletsComponent', () => {
  let component: CarouselWalletsComponent;
  let fixture: ComponentFixture<CarouselWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselWalletsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
