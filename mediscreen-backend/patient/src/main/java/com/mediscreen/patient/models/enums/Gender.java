package com.mediscreen.patient.models.enums;

public enum Gender {
    MALE("M"),
    FEMALE("F");

    private final String initial;

    Gender(String gender) {
        this.initial = gender;
    }

    public String getInitial() {
        return initial;
    }
}
