import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingBucketComponent } from './onboarding-bucket.component';

describe('OnboardingBucketComponent', () => {
  let component: OnboardingBucketComponent;
  let fixture: ComponentFixture<OnboardingBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingBucketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
