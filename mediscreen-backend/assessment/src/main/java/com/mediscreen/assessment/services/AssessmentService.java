package com.mediscreen.assessment.services;

import com.mediscreen.assessment.beans.NoteBean;
import com.mediscreen.assessment.beans.PatientBean;
import com.mediscreen.assessment.beans.enums.Gender;
import com.mediscreen.assessment.proxies.HistoryServiceProxy;
import com.mediscreen.assessment.proxies.PatientServiceProxy;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Year;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class AssessmentService {
    @Autowired
    HistoryServiceProxy historyServiceProxy;

    @Autowired
    PatientServiceProxy patientServiceProxy;

    private static final List<String> TRIGGER_LIST = Arrays.asList(
            "hémoglobine A1C",
            "microalbumine",
            "taille",
            "poids",
            "fumeur",
            "anormal",
            "cholestérol",
            "vertige",
            "rechute",
            "réaction",
            "anticorps"
    );

    public String patientAssessment(Long id) {
        PatientBean patient = patientServiceProxy.getPatientById(id);
        List<NoteBean> notes = historyServiceProxy.getAllNoteByPatId(id);
        Long patientAge = getAge(patient.getDob());
        int triggerCount = getTriggerCount(notes);
        String diabetesLevel = "None";

        if (patientAge < 30) {
            if ((patient.getSex().equals(Gender.MALE) && triggerCount >= 5) || (patient.getSex().equals(Gender.FEMALE) && triggerCount >= 7)) {
                diabetesLevel = "Early onset";
            } else if ((patient.getSex().equals(Gender.MALE) && triggerCount >= 3) || (patient.getSex().equals(Gender.FEMALE) && triggerCount >= 4)) {
                diabetesLevel = "Danger";
            }
        } else {
            if (triggerCount >= 8) {
                diabetesLevel = "Early Onset";
            }

            if (triggerCount >= 6) {
                diabetesLevel = "Danger";
            }

            if (triggerCount >= 2) {
                diabetesLevel = "Borderline";
            }
        }
        return String.format("Patient: %s %s (age %d) diabetes assessment is: %s", patient.getGiven(), patient.getFamily(), patientAge, diabetesLevel);
    }

    public int getTriggerCount(List<NoteBean> notes) {
        Set<String> triggers = new HashSet();

        for (NoteBean note : notes) {
            if (!(note.getContent() == null) && !(note.getContent().isEmpty()))
                triggers.addAll(TRIGGER_LIST.stream().filter(terms -> note.getContent().toLowerCase().contains(terms.toLowerCase())).collect(Collectors.toList()));
        }

        return triggers.size();
    }


    private long getAge(LocalDate date) {
        return ChronoUnit.YEARS.between(date, LocalDate.now());
    }
}
