import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppGmapComponent } from './app-gmap.component';

describe('AppGmapComponent', () => {
  let component: AppGmapComponent;
  let fixture: ComponentFixture<AppGmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppGmapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppGmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
