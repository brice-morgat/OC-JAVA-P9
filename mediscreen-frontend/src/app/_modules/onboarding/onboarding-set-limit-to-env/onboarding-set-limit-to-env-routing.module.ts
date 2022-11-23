import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingSetLimitToEnvComponent } from './pages/onboarding-set-limit-to-env/onboarding-set-limit-to-env.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingSetLimitToEnvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingSetLimitToEnvRoutingModule { }
