package com.mediscreen.patient.repository;

import com.mediscreen.patient.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long> {
    public Optional<Patient> getPatientById(Long id);
}
