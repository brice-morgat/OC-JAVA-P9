import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
        {
          path: '',
          loadChildren: () => import('./onboarding-home/onboarding-home.module').then(mod => mod.OnboardingHomeModule),
        },
        {
          path: 'users',
          loadChildren: () => import('./onboarding-users/onboarding-users.module').then(mod => mod.OnboardingUsersModule),
        },
        {
          path: 'set-limit-env',
          loadChildren: () => import('./onboarding-set-limit-to-env/onboarding-set-limit-to-env.module').then(mod => mod.OnboardingSetLimitToEnvModule),
        },
        {
          path: 'bucket',
          loadChildren: () => import('./onboarding-bucket/onboarding-bucket.module').then(mod => mod.OnboardingBucketModule),
        },
        {
          path: 'entreprise',
          loadChildren: () => import('./onboarding-entreprise/onboarding-entreprise.module').then(mod => mod.OnboardingEntrepriseModule),
        },
        {
          path: 'environnement',
          loadChildren: () => import('./onboarding-environnement/onboarding-environnement.module').then(mod => mod.OnboardingEnvironnementModule),
        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
