package com.mediscreen.patient.controller;

import com.mediscreen.patient.models.Patient;
import com.mediscreen.patient.services.IPatientService;
import com.mediscreen.patient.services.impl.PatientServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Controller("/patient")
public class PatientController {
    private final Logger logger = LoggerFactory.getLogger(PatientController.class);

    @Autowired
    IPatientService patientService;

    @GetMapping("/getAll")
    public ResponseEntity getAllPatient() {
        logger.info("Get All Patient");
        try {
            List<Patient> allPatient = patientService.getAllPatients();
            return new ResponseEntity(allPatient, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @GetMapping("/get")
    public ResponseEntity getPatientById(@RequestParam Long id) {
        logger.info("Get Patient by Id");
        try {
            Patient patient = patientService.getPatient(id);
            return new ResponseEntity(patient, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @PostMapping("/add")
    public ResponseEntity savePatient(@RequestBody Patient patient) {
        logger.info("Save Patient");
        try {
            Patient saved = patientService.savePatient(patient);
            return new ResponseEntity(saved, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @PutMapping("/modify")
    public ResponseEntity modifyPatient(@RequestBody Patient patient) {
        logger.info("Save Patient");
        try {
            Patient saved = patientService.updatePatient(patient);
            return new ResponseEntity(saved, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
}