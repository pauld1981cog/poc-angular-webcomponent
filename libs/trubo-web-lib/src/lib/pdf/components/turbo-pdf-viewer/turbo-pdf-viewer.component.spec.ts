import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurboPdfViewerComponent } from './turbo-pdf-viewer.component';

describe('TurboPdfViewerComponent', () => {
  let component: TurboPdfViewerComponent;
  let fixture: ComponentFixture<TurboPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurboPdfViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TurboPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
