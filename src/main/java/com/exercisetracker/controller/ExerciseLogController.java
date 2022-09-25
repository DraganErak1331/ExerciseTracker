package com.exercisetracker.controller;

import com.exercisetracker.data.ExerciseLog;
import com.exercisetracker.model.ExerciseLogModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/exercise-tracker")
@CrossOrigin

public class ExerciseLogController {
    @Autowired
    private ExerciseLogModel exerciseLogModel;

    @GetMapping("/exercise-log-list")
    public List<ExerciseLog> getExerciseLogList() {
        return exerciseLogModel.getExercisesQuery();
    }

    @PostMapping("/create-exercise-log")
    public String createExerciseLog(@RequestBody ExerciseLog exerciseLog) {
        exerciseLogModel.createExerciseQuery(exerciseLog);
        return "New exercise log has been created.";
    }

    @GetMapping("/exercises/{id}")
    public ResponseEntity<ExerciseLog> getExerciseLog(@PathVariable Integer id) {
        try {
            ExerciseLog exerciseLog = exerciseLogModel.getExerciseLogQuery(id);
            return new ResponseEntity<ExerciseLog>(exerciseLog, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<ExerciseLog>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/edit-exercise/{id}")
    public ResponseEntity<ExerciseLog> editExerciseLog(@RequestBody ExerciseLog exerciseLog, @PathVariable Integer id) {
        try {
            exerciseLogModel.createExerciseQuery(exerciseLog);
            return new ResponseEntity<ExerciseLog>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<ExerciseLog>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public String deleteExerciseLog(@PathVariable Integer id) {
        exerciseLogModel.deleteExerciseLog(id);
        return "Deleted Exercise Log with id " + id;
    }
}
