package com.mediscreen.assessment.beans.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Gender {
    @JsonProperty("M")
    MALE("M"),
    @JsonProperty("F")
    FEMALE("F");

    private final String initial;

    Gender(String initial) {
        this.initial = initial;
    }

    public String getInitial() {
        return initial;
    }

    public static Gender getGenderFromInitial(String initial) {
        for (Gender g : Gender.values()) {
            if (g.initial == initial) {
                return g;
            }
        }
        return null;
    }
}
