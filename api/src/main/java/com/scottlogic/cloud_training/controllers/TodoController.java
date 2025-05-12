package com.scottlogic.cloud_training.controllers;

import com.scottlogic.cloud_training.dtos.CreateTodoDTO;
import com.scottlogic.cloud_training.dtos.UpdateTodoDTO;
import com.scottlogic.cloud_training.entities.Todo;
import com.scottlogic.cloud_training.services.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/todos")
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/{todoId}")
    public ResponseEntity<Todo> getTodo(@PathVariable UUID todoId) {
        return new ResponseEntity<>(todoService.getTodo(todoId), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        return new ResponseEntity<>(todoService.getAllTodos(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Todo> createTodo(@RequestBody CreateTodoDTO dto) {
        return new ResponseEntity<>(todoService.createTodo(dto), HttpStatus.CREATED);
    }

    @PatchMapping("/{todoId}")
    public ResponseEntity<Todo> updateTodo(@PathVariable UUID todoId, @RequestBody UpdateTodoDTO dto) {
        return new ResponseEntity<>(todoService.updateTodo(todoId, dto), HttpStatus.CREATED);
    }
}
