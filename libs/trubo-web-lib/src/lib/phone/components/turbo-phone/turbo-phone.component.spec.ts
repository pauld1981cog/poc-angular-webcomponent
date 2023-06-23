import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurboPhoneComponent } from './turbo-phone.component';

describe('TurboPhoneComponent', () => {
  let component: TurboPhoneComponent;
  let fixture: ComponentFixture<TurboPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurboPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TurboPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
