import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingEntrepriseRoutingModule } from './onboarding-entreprise-routing.module';
import { OnboardingEntrepriseComponent } from './pages/onboarding-entreprise/onboarding-entreprise.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    OnboardingEntrepriseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OnboardingEntrepriseRoutingModule
  ]
})
export class OnboardingEntrepriseModule { }
