import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingSetLimitToEnvRoutingModule } from './onboarding-set-limit-to-env-routing.module';
import { OnboardingSetLimitToEnvComponent } from './pages/onboarding-set-limit-to-env/onboarding-set-limit-to-env.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    OnboardingSetLimitToEnvComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    OnboardingSetLimitToEnvRoutingModule
  ]
})
export class OnboardingSetLimitToEnvModule { }
