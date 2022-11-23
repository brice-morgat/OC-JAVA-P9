import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingHomeRoutingModule } from './onboarding-home-routing.module';
import { OnboardingHomeComponent } from './pages/onboarding-home/onboarding-home.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    OnboardingHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OnboardingHomeRoutingModule
  ]
})
export class OnboardingHomeModule { }
