import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-home',
  templateUrl: './onboarding-home.component.html',
  styleUrls: ['./onboarding-home.component.scss']
})
export class OnboardingHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickUser() {
    this.router.navigate(['/onboarding/users'])
  }
}
