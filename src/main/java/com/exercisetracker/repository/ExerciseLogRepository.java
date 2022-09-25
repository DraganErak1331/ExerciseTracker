package com.exercisetracker.repository;

import com.exercisetracker.data.ExerciseLog;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface ExerciseLogRepository extends JpaRepository<ExerciseLog, Integer> {
}
