import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonUserDetailsComponent } from './common-user-details.component';

describe('CommonUserDetailsComponent', () => {
  let component: CommonUserDetailsComponent;
  let fixture: ComponentFixture<CommonUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUserDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
