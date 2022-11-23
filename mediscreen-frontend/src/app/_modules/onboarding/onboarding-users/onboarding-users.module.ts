import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingUsersRoutingModule } from './onboarding-users-routing.module';
import { OnboardingUsersComponent } from './pages/onboarding-users/onboarding-users.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    OnboardingUsersComponent
  ],
  imports: [
    CommonModule,
    OnboardingUsersRoutingModule,
    SharedModule
  ]
})
export class OnboardingUsersModule { }
