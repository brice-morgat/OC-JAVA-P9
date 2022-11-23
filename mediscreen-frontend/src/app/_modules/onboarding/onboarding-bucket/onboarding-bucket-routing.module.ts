import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingBucketComponent } from './pages/onboarding-bucket/onboarding-bucket.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingBucketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingBucketRoutingModule { }
