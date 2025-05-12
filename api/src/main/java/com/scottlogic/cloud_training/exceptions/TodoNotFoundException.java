package com.scottlogic.cloud_training.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class TodoNotFoundException extends ResponseStatusException {

    public TodoNotFoundException(String msg) {
        super(HttpStatus.NOT_FOUND, msg);
    }
}
