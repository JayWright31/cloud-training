package com.scottlogic.cloud_training.controllers;

import com.scottlogic.cloud_training.dtos.CreateUserDTO;
import com.scottlogic.cloud_training.entities.User;
import com.scottlogic.cloud_training.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody CreateUserDTO dto) {
        return new ResponseEntity<>(userService.createUser(dto), HttpStatus.CREATED);
    }

    @GetMapping("/{userName}")
    public ResponseEntity<User> getUser(@PathVariable String userName) {
        return new ResponseEntity<>(userService.findUser(userName), HttpStatus.OK);
    }
}
