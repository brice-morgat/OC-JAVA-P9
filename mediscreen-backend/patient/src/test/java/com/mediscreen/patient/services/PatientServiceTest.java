package com.mediscreen.patient.services;

import com.mediscreen.patient.models.Patient;
import com.mediscreen.patient.models.enums.Gender;
import org.apache.tools.ant.Project;
import org.apache.tools.ant.taskdefs.SQLExec;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ActiveProfiles;


import java.io.File;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.StatusResultMatchersExtensionsKt.isEqualTo;

@SpringBootTest
@ActiveProfiles("test")
public class PatientServiceTest {
    @Autowired
    private IPatientService patientService;

    @Autowired
    private Environment env;

    @BeforeEach
    public void init() {
        executeSql("src/main/resources/mediscreen_test_db.sql");
    }

    private void executeSql(String sqlFilePath) {
        final class SqlExecuter extends SQLExec {
            public SqlExecuter() {
                Project project = new Project();
                project.init();
                setProject(project);
                setTaskType("sql");
                setTaskName("sql");
            }
        }

        SqlExecuter executer = new SqlExecuter();
        executer.setSrc(new File(sqlFilePath));
        executer.setDriver("com.mysql.jdbc.Driver");
        executer.setPassword(env.getProperty("spring.datasource.password"));
        executer.setUserid(env.getProperty("spring.datasource.username"));
        executer.setUrl(env.getProperty("spring.datasource.url"));
        executer.execute();
    }

    @Test
    public void getPatientByIdTest() {
        //Given
        Patient patient = new Patient();
        patient.setId(1L);
        patient.setAddress("208 Street Boulvard, Paris, 90 000");
        patient.setDob(LocalDate.now().minusYears(20L));
        patient.setSex(Gender.MALE);
        patient.setFamily("Firstname");
        patient.setGiven("Lastname");
        //When
        Patient savePatient = patientService.savePatient(patient);
        Patient getPatient = patientService.getPatient(1L);
        //Then
        assertEquals(savePatient.toString(), getPatient.toString());
    }

    @Test
    public void savePatientTest() {
        //Given
        Patient patient = new Patient();
        patient.setId(1L);
        patient.setAddress("208 Street Boulvard, Paris, 90 000");
        patient.setDob(LocalDate.now().minusYears(20L));
        patient.setSex(Gender.MALE);
        patient.setFamily("Firstname");
        patient.setGiven("Lastname");
        //When
        Patient savePatient = patientService.savePatient(patient);
        //Then
        assertEquals(savePatient.toString(), patient.toString());
    }

    @Test
    public void updatePatientTest() {
        //Given
        Patient patient = new Patient();
        patient.setId(1L);
        patient.setAddress("208 Street Boulvard, Paris, 90 000");
        patient.setDob(LocalDate.now().minusYears(20L));
        patient.setSex(Gender.MALE);
        patient.setFamily("Firstname");
        patient.setGiven("Lastname");
        //When
        Patient savePatient = patientService.updatePatient(patient);
        //Then
        assertEquals(savePatient.toString(), patient.toString());
    }

    @Test
    public void deletePatientTest() {
        //Given
        Patient patient = new Patient();
        patient.setId(1L);
        patient.setAddress("208 Street Boulvard, Paris, 90 000");
        patient.setDob(LocalDate.now().minusYears(20L));
        patient.setSex(Gender.MALE);
        patient.setFamily("Firstname");
        patient.setGiven("Lastname");
        //When
        patientService.savePatient(patient);
        //Then
        assertDoesNotThrow(() -> patientService.deletePatient(1L));
    }

    @Test
    public void getAllPatientTest() {
        //Given
        Patient patient = new Patient();
        patient.setAddress("208 Street Boulvard, Paris, 90 000");
        patient.setDob(LocalDate.now().minusYears(20L));
        patient.setSex(Gender.MALE);
        patient.setFamily("Firstname");
        patient.setGiven("Lastname");

        Patient patient2 = new Patient();
        patient.setAddress("208 Street Boulvard, Paris, 90 000");
        patient.setDob(LocalDate.now().minusYears(20L));
        patient.setSex(Gender.MALE);
        patient.setFamily("Firstname");
        patient.setGiven("Lastname");
        List<Patient> patientList = new ArrayList<>();
        patientList.add(patient);
        patientList.add(patient2);
        //When
        patientService.savePatient(patient);
        patientService.savePatient(patient2);
        //Then
        assertEquals(patientService.getAllPatients().toString(), patientList.toString());
    }
}
