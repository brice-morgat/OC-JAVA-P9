import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingUsersComponent } from './onboarding-users.component';

describe('OnboardingUsersComponent', () => {
  let component: OnboardingUsersComponent;
  let fixture: ComponentFixture<OnboardingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
