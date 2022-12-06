import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Patient } from 'src/app/_models/patient.model';
import { PatientService } from 'src/app/_services/patient.service';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.scss']
})
export class FichePatientComponent implements OnInit {
  id: any;
  patient: Observable<Patient>;
  selectNote: string;
  testText: string = "<p>Ceci est un commentaire basique</p>"

  constructor(private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.id = params.id;
      this.getPatient();
    });
  }

  getPatient() {
    this.patient = this.patientService.getPatient(this.id).pipe(
      catchError(() => {
        return of();
      })
    );
  }

  back() {
    this.router.navigateByUrl('/patient');
  }
}
