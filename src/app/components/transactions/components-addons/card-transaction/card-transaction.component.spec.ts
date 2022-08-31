import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTransactionComponent } from './card-transaction.component';

describe('CardTransactionComponent', () => {
  let component: CardTransactionComponent;
  let fixture: ComponentFixture<CardTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTransactionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
