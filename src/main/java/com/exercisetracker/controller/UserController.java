package com.exercisetracker.controller;

import com.exercisetracker.data.User;
import com.exercisetracker.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exercise-tracker")
@CrossOrigin

public class UserController {
    @Autowired
    private UserModel userModel;

    @GetMapping("/user-list")
    public List<User> getUsersList() {
        return userModel.getUsersQuery();
    }

    @PostMapping("/create-user")
    public String createUser(@RequestBody User user) {
        userModel.createUserQuery(user);
        return "New user has been created.";
    }
}
