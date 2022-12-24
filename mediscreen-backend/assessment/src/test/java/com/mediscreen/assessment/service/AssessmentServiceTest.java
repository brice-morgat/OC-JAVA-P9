package com.mediscreen.assessment.service;

import com.mediscreen.assessment.beans.NoteBean;
import com.mediscreen.assessment.beans.PatientBean;
import com.mediscreen.assessment.beans.enums.Gender;
import com.mediscreen.assessment.proxies.HistoryServiceProxy;
import com.mediscreen.assessment.proxies.PatientServiceProxy;
import com.mediscreen.assessment.services.AssessmentService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
public class AssessmentServiceTest {
    @InjectMocks
    private AssessmentService assessmentService;

    @Mock
    private HistoryServiceProxy historyServiceProxy;

    @Mock
    private PatientServiceProxy patientServiceProxy;

    @Test
    public void patientAssessmentTest() {
        //Given
        PatientBean patient = new PatientBean();
        patient.setDob(LocalDate.of(2011, 01, 01));
        patient.setSex(Gender.MALE);
        patient.setGiven("Brice");
        patient.setFamily("Morgat");
        patient.setAddress("Adresse");
        patient.setId(1L);
        patient.setPhone("0767173435");

        List<NoteBean> noteBeanList = new ArrayList<>();
        NoteBean note1 = new NoteBean();
        note1.setId(1);
        note1.setContent("Patient rechute taille réaction");
        NoteBean note2 = new NoteBean();
        note2.setId(2);
        note2.setContent("Patient anticorps");
        noteBeanList.addAll(List.of(note1, note2));
        //When
        Mockito.when(patientServiceProxy.getPatientById(Mockito.anyLong())).thenReturn(patient);
        Mockito.when(historyServiceProxy.getAllNoteByPatId(Mockito.anyLong())).thenReturn(noteBeanList);
        //Then
        assertTrue(assessmentService.patientAssessment(1L).contains("Danger"));
    }
}
