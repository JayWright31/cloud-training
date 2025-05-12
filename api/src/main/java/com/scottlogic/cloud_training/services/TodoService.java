package com.scottlogic.cloud_training.services;

import com.scottlogic.cloud_training.dtos.CreateTodoDTO;
import com.scottlogic.cloud_training.dtos.UpdateTodoDTO;
import com.scottlogic.cloud_training.entities.Todo;
import com.scottlogic.cloud_training.exceptions.TodoNotFoundException;
import com.scottlogic.cloud_training.repositories.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public Todo getTodo(UUID id) {
        return todoRepository.findById(id).orElseThrow(() -> new TodoNotFoundException(String.format("No todo found with ID %s", id)));
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo createTodo(CreateTodoDTO dto) {
        Todo todo = new Todo();
        todo.setTitle(dto.title());
        return todoRepository.save(todo);
    }

    public Todo updateTodo(UUID id, UpdateTodoDTO dto) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(String.format("No todo found with ID %s", id)));
        todo.setTitle(dto.title());
        return todoRepository.save(todo);
    }
}
