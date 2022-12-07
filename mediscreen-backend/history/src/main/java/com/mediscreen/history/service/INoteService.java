package com.mediscreen.history.service;

import com.mediscreen.history.model.Note;

import java.util.List;

public interface INoteService {

    public Note saveNote(Note note);

    public Note modifyNote(Note note);

    public List<Note> getNotesByPatId(Long id);
}
