package com.mediscreen.history.controller;

import com.mediscreen.history.model.Note;
import com.mediscreen.history.repository.NoteRepo;
import com.mediscreen.history.service.INoteService;
import com.mediscreen.history.service.impl.NoteServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/patHistory")
public class NoteController {
    private final Logger logger = LoggerFactory.getLogger(NoteController.class);

    @Autowired
    private INoteService noteService;

    @PostMapping("/add")
    public ResponseEntity saveNote(@RequestBody Note note) {
        logger.info("Post Notes");
        try {
            Note result = noteService.saveNote(note);
            return new ResponseEntity(result, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @PutMapping("/edit")
    public ResponseEntity modifyNote(@RequestBody Note note) {
        logger.info("Edit Notes");
        try {
            Note result = noteService.modifyNote(note);
            return new ResponseEntity(result, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    @GetMapping("/getAllByPatId")
    public ResponseEntity getAllByPatId(@RequestParam Long id) {
        logger.info("Get Notes By Patient Id");
        try {
            List<Note> result = noteService.getNotesByPatId(id);
            Collections.reverse(result);
            return new ResponseEntity(result, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error has occurred : {}", e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
}
