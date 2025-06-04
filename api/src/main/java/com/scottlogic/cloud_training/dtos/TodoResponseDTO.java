package com.scottlogic.cloud_training.dtos;

import java.util.UUID;

public record TodoResponseDTO(UUID id, String title, boolean completed, String userName) {
}
