package com.scottlogic.cloud_training.repositories;

import com.scottlogic.cloud_training.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface TodoRepository extends JpaRepository<Todo, String> {
    Optional<Todo> findById(UUID id);
}
