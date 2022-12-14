package com.mediscreen.history.service.impl;

import com.mediscreen.history.model.Note;
import com.mediscreen.history.repository.NoteRepo;
import com.mediscreen.history.service.INoteService;
import com.mediscreen.history.service.SequenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.aggregation.BooleanOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class NoteServiceImpl implements INoteService {
    @Autowired
    NoteRepo noteRepo;

    @Autowired
    MongoOperations mongoOperations;


    @Autowired
    SequenceService sequenceService;

    @Override
    public Note saveNote(Note note) {
        note.setId(sequenceService.generateSequence(Note.SQUENCE_NAME));
        note.setCreatedAt(LocalDateTime.now());
        return noteRepo.save(note);
    }

    @Override
    public Note modifyNote(Note note) {
        Query query = Query.query(Criteria.where("id").is(note.getId()));
        Note noteQuery = mongoOperations.findOne(query, Note.class);
        noteQuery.setUpdatedAt(LocalDateTime.now());
        noteQuery.setContent(note.getContent());
        return noteRepo.save(noteQuery);
    }

    @Override
    public List<Note> getNotesByPatId(Long id) {
        return noteRepo.findNotesByPatId(id);
    }
}
