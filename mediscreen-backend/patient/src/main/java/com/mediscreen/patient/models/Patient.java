package com.mediscreen.patient.models;

import com.mediscreen.patient.models.enums.Gender;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@ToString
public class Patient {
    @Id
    @SequenceGenerator(name = "patient_gen", sequenceName = "patient_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "patient_gen")
    private Long id;
    private String firstName;
    private String lastName;
    private LocalDate birthday;
    private Gender gender;
    private String address;
    private String phoneNumber;
}
