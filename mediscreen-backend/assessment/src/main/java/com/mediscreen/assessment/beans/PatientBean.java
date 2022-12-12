package com.mediscreen.assessment.beans;

import com.mediscreen.assessment.beans.enums.Gender;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@Setter
@ToString
public class PatientBean {
    private Long id;
    private String given;
    private String family;
    private LocalDate dob;
    private Gender sex;
    private String address;
    private String phone;
}
