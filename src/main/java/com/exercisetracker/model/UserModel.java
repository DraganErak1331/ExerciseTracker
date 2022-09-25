package com.exercisetracker.model;

import com.exercisetracker.data.ExerciseLog;
import com.exercisetracker.data.User;
import com.exercisetracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserModel {
    @Autowired
    private UserRepository userRepository;

    public List<User> getUsersQuery() {
        return userRepository.findAll();
    }

    public User createUserQuery(User user) {
        return userRepository.save(user);
    }
}

