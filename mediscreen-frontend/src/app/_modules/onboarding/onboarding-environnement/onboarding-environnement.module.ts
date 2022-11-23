import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingEnvironnementRoutingModule } from './onboarding-environnement-routing.module';
import { OnboardingEnvironnementComponent } from './pages/onboarding-environnement/onboarding-environnement.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { Dropdown, DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [OnboardingEnvironnementComponent],
  imports: [
    CommonModule,
    SharedModule,
    DropdownModule,
    OnboardingEnvironnementRoutingModule
  ]
})
export class OnboardingEnvironnementModule { }
