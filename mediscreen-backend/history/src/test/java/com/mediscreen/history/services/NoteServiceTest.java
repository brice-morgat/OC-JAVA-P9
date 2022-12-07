package com.mediscreen.history.services;

import com.mediscreen.history.model.Note;
import com.mediscreen.history.repository.NoteRepo;

import com.mediscreen.history.service.SequenceService;
import com.mediscreen.history.service.impl.NoteServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoOperations;

import javax.management.Query;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class NoteServiceTest {
    @InjectMocks
    private NoteServiceImpl noteService;

    @Mock
    private SequenceService sequenceService;

    @Mock
    private MongoOperations operations;

    @Mock
    private NoteRepo noteRepo;




    @Test
    public void getNoteByPatIdTest() {
        //Given
        Note note = new Note();
        note.setId(1);
        note.setContent("Contenu");
        Note note2 = new Note();
        note.setId(2);
        note.setContent("Contenu");
        List<Note> result = new ArrayList();
        result.add(note);
        result.add(note2);
        Mockito.when(noteRepo.findNotesByPatId(Mockito.anyLong())).thenReturn(result);
        //Then
        assertEquals(noteService.getNotesByPatId(1L), result);
    }

    @Test
    public void saveNoteTest() {
        //Given
        Note note = new Note();
        note.setContent("Contenu");
        //When
        Mockito.when(sequenceService.generateSequence(Mockito.any())).thenReturn(1);
        Mockito.when(noteRepo.save(Mockito.any())).thenReturn(note);
        //Then
        assertEquals(noteService.saveNote(note), note);
    }

    @Test
    public void updateNoteTest() {
        //Given
        Note note = new Note();
        note.setId(1);
        note.setContent("Contenu");

        //When
        Mockito.when(operations.findOne(Mockito.any(), Mockito.any())).thenReturn(note);
        Mockito.when(noteRepo.save(Mockito.any())).thenReturn(note);
        //Then
        assertEquals(noteService.modifyNote(note), note);
    }
}
