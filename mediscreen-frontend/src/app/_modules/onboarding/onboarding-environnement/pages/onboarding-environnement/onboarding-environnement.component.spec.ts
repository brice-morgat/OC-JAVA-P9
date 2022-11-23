import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingEnvironnementComponent } from './onboarding-environnement.component';

describe('OnboardingEnvironnementComponent', () => {
  let component: OnboardingEnvironnementComponent;
  let fixture: ComponentFixture<OnboardingEnvironnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingEnvironnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingEnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
