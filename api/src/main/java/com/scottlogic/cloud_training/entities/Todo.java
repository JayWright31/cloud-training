package com.scottlogic.cloud_training.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.UUID;

@Entity
@Table(name = "todos")
@NoArgsConstructor(force = true)
@Data
public class Todo {

    @Id
    @GeneratedValue
    private UUID id;

    @NonNull
    private String title;
    private boolean completed;
}
