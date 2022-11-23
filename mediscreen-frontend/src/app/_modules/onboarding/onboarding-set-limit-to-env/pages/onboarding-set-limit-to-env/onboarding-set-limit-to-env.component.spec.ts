import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingSetLimitToEnvComponent } from './onboarding-set-limit-to-env.component';

describe('OnboardingSetLimitToEnvComponent', () => {
  let component: OnboardingSetLimitToEnvComponent;
  let fixture: ComponentFixture<OnboardingSetLimitToEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingSetLimitToEnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingSetLimitToEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
