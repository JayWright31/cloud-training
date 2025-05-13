package com.scottlogic.cloud_training.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class UserNotFoundException extends ResponseStatusException {

    public UserNotFoundException(String name) {
        super(HttpStatus.NOT_FOUND, String.format("No user exists with username %s", name));
    }
}
