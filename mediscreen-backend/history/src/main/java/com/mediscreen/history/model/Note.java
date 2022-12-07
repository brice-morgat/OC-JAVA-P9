package com.mediscreen.history.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Document(collection = "note")
public class Note {
    @Transient
    public static final String SQUENCE_NAME = "notes_sequence";

    @Id
    private int id;
    private Long patId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
