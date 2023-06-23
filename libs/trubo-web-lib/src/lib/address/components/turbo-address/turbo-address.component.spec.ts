import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurboAddressComponent } from './turbo-address.component';

describe('TurboAddressComponent', () => {
  let component: TurboAddressComponent;
  let fixture: ComponentFixture<TurboAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurboAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TurboAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
