package com.scottlogic.cloud_training.controllers;

import com.scottlogic.cloud_training.dtos.CreateTodoDTO;
import com.scottlogic.cloud_training.dtos.TodoResponseDTO;
import com.scottlogic.cloud_training.entities.Todo;
import com.scottlogic.cloud_training.services.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/todo")
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/{todoId}")
    public ResponseEntity<Todo> getTodo(@PathVariable UUID todoId) {
        return new ResponseEntity<>(todoService.getTodo(todoId), HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TodoResponseDTO>> getUserTodos(@PathVariable UUID userId) {
        return new ResponseEntity<>(todoService.getUserTodos(userId), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        return new ResponseEntity<>(todoService.getAllTodos(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TodoResponseDTO> createTodo(@RequestBody CreateTodoDTO dto) {
        return new ResponseEntity<>(todoService.createTodo(dto), HttpStatus.CREATED);
    }

    @PatchMapping("/{todoId}{title}")
    public ResponseEntity<Todo> updateTodo(@PathVariable UUID todoId, @RequestParam String title) {
        return new ResponseEntity<>(todoService.updateTodoTitle(todoId, title), HttpStatus.CREATED);
    }

    @PatchMapping("/complete/{todoId}")
    public ResponseEntity<Todo> updateTodo(@PathVariable UUID todoId, @RequestParam boolean complete) {
        return new ResponseEntity<>(todoService.updateTodoComplete(todoId, complete), HttpStatus.CREATED);
    }

    @DeleteMapping("/{todoId}")
    public ResponseEntity<?> deleteTodo(@PathVariable UUID todoId) {
        todoService.deleteTodo(todoId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
