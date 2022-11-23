import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingUsersComponent } from './pages/onboarding-users/onboarding-users.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingUsersRoutingModule { }
