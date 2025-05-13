package com.scottlogic.cloud_training.dtos;

import java.util.UUID;

public record CreateTodoDTO(UUID userId, String title) {
}
