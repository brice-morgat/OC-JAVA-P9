package com.mediscreen.assessment.controller;

import com.mediscreen.assessment.services.AssessmentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/assess")
public class AssessmentController {
    private final Logger logger = LoggerFactory.getLogger(AssessmentController.class);

    @Autowired
    private AssessmentService assessmentService;

    @GetMapping("/id")
    public ResponseEntity getAllByPatId(@RequestParam Long id) {
        logger.info("Get Assessment By Patient Id");
        try {
            String result = assessmentService.patientAssessment(id);
            return new ResponseEntity(result, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

}
