package com.mediscreen.history.repository;

import com.mediscreen.history.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepo extends MongoRepository<Note, String> {
    List<Note> findNotesByPatId(Long id);

}
