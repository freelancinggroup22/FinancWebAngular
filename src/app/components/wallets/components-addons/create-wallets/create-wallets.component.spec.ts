import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWalletsComponent } from './create-wallets.component';

describe('CreateWalletsComponent', () => {
  let component: CreateWalletsComponent;
  let fixture: ComponentFixture<CreateWalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWalletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
