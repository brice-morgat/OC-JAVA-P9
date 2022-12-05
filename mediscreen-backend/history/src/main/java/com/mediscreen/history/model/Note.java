package com.mediscreen.history.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Document(collation = "History")
public class Note {
    @Id
    private int id;
    private Long patId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
