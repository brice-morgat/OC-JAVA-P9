package com.mediscreen.patient.services.impl;

import com.mediscreen.patient.models.Patient;
import com.mediscreen.patient.repository.PatientRepo;
import com.mediscreen.patient.services.IPatientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PatientServiceImpl implements IPatientService {
    @Autowired
    PatientRepo patientRepo;

    private final Logger logger = LoggerFactory.getLogger(PatientServiceImpl.class);


    @Override
    public Patient getPatient(Long id) {
        return patientRepo.getPatientById(id).orElseThrow();
    }

    @Override
    @Transactional
    public Patient savePatient(Patient patient) {
        return patientRepo.save(patient);
    }

    @Override
    @Transactional
    public void deletePatient(Long id) {
        Patient patient = patientRepo.getPatientById(id).orElseThrow();
        patientRepo.delete(patient);
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }

    @Override
    @Transactional
    public Patient updatePatient(Patient patient) {
        return patientRepo.save(patient);
    }
}
