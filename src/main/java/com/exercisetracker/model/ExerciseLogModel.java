package com.exercisetracker.model;

import com.exercisetracker.data.ExerciseLog;
import com.exercisetracker.repository.ExerciseLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ExerciseLogModel {
    @Autowired
    private ExerciseLogRepository exerciseLogRepository;

    public List<ExerciseLog> getExercisesQuery() {
        return exerciseLogRepository.findAll();
    }

    public ExerciseLog createExerciseQuery(ExerciseLog exerciseLog) {
        return exerciseLogRepository.save(exerciseLog);
    }

    public ExerciseLog getExerciseLogQuery(Integer id) {
        return exerciseLogRepository.findById(id).get();
    }

    public void deleteExerciseLog(Integer id){
        exerciseLogRepository.deleteById(id);
    }
}
