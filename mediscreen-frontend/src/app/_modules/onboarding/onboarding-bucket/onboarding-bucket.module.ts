import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingBucketRoutingModule } from './onboarding-bucket-routing.module';
import { OnboardingBucketComponent } from './pages/onboarding-bucket/onboarding-bucket.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    OnboardingBucketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OnboardingBucketRoutingModule
  ]
})
export class OnboardingBucketModule { }
