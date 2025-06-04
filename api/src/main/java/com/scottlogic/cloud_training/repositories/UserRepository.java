package com.scottlogic.cloud_training.repositories;

import com.scottlogic.cloud_training.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByName(String name);
    Boolean existsByName(String name);
}
