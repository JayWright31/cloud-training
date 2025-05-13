package com.scottlogic.cloud_training.repositories;

import com.scottlogic.cloud_training.entities.Todo;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TodoRepository extends JpaRepository<Todo, UUID> {
    @NonNull
    Optional<Todo> findById(@NonNull UUID id);
    List<Todo> findAllByUserId(UUID userId);
}
