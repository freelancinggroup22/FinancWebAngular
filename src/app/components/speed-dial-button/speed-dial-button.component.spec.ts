import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedDialButtonComponent } from './speed-dial-button.component';

describe('SpeedDialButtonComponent', () => {
  let component: SpeedDialButtonComponent;
  let fixture: ComponentFixture<SpeedDialButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedDialButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedDialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
