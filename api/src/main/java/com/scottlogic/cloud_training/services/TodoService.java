package com.scottlogic.cloud_training.services;

import com.scottlogic.cloud_training.dtos.CreateTodoDTO;
import com.scottlogic.cloud_training.dtos.TodoResponseDTO;
import com.scottlogic.cloud_training.dtos.UpdateTodoDTO;
import com.scottlogic.cloud_training.entities.Todo;
import com.scottlogic.cloud_training.entities.User;
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
    private final UserService userService;

    public Todo getTodo(UUID id) {
        return todoRepository.findById(id).orElseThrow(() -> new TodoNotFoundException(String.format("No todo found with ID %s", id)));
    }

    public List<TodoResponseDTO> getUserTodos(UUID userId) {
        List<Todo> todos = todoRepository.findAllByUserId(userId);

        if (todos.isEmpty()) {
            throw new TodoNotFoundException(String.format("No todos found for user with ID %s", userId));
        }

        return todos.stream()
                .map(todo -> new TodoResponseDTO(
                        todo.getId(),
                        todo.getTitle(),
                        todo.isCompleted(),
                        todo.getUser().getName()
                ))
                .toList();
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public TodoResponseDTO createTodo(CreateTodoDTO dto) {
        User user = userService.findUser(dto.userId());
        Todo todo = new Todo();
        todo.setUser(user);
        todo.setTitle(dto.title());
        Todo saved = todoRepository.save(todo);
        return new TodoResponseDTO(saved.getId(), saved.getTitle(), saved.isCompleted(), saved.getUser().getName());
    }

    public Todo updateTodo(UUID id, UpdateTodoDTO dto) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new TodoNotFoundException(String.format("No todo found with ID %s", id)));
        todo.setTitle(dto.title());
        todo.setCompleted(dto.completed());
        return todoRepository.save(todo);
    }
}
