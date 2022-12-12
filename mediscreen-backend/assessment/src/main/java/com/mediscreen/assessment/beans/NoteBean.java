package com.mediscreen.assessment.beans;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class NoteBean {
    private int id;
    private Long patId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
