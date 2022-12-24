package com.mediscreen.history.service;

import com.mediscreen.history.model.Note;

import java.util.List;

public interface INoteService {
    /**
     * Save a note to the database.
     *
     * @param note The note object that you want to save.
     * @return A Note object.
     */
    public Note saveNote(Note note);

    /**
     * Modify a note.
     *
     * @param note The note object that you want to modify.
     * @return The modified note.
     */
    public Note modifyNote(Note note);

    /**
     * Get all notes for a patient.
     *
     * @param id The id of the patient
     * @return A list of notes
     */
    public List<Note> getNotesByPatId(Long id);
}
