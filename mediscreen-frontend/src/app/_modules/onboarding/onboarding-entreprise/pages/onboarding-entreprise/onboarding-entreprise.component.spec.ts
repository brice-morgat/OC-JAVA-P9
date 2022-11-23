import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingEntrepriseComponent } from './onboarding-entreprise.component';

describe('OnboardingEntrepriseComponent', () => {
  let component: OnboardingEntrepriseComponent;
  let fixture: ComponentFixture<OnboardingEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
