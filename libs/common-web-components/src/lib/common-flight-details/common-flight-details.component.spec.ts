import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonFlightDetailsComponent } from './common-flight-details.component';

describe('CommonFlightDetailsComponent', () => {
  let component: CommonFlightDetailsComponent;
  let fixture: ComponentFixture<CommonFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonFlightDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
