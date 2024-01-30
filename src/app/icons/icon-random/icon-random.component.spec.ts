import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconRandomComponent } from './icon-random.component';

describe('IconRandomComponent', () => {
  let component: IconRandomComponent;
  let fixture: ComponentFixture<IconRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconRandomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
