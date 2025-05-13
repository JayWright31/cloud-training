package com.scottlogic.cloud_training.services;

import com.scottlogic.cloud_training.dtos.CreateUserDTO;
import com.scottlogic.cloud_training.entities.User;
import com.scottlogic.cloud_training.exceptions.UserNotFoundException;
import com.scottlogic.cloud_training.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(CreateUserDTO dto) {
        if (userRepository.existsByName(dto.userName())) {
            return findUser(dto.userName());
        }

        User user = new User();
        user.setName(dto.userName());
        return userRepository.save(user);
    }

    public User findUser(String name) {
        return userRepository.findByName(name).orElseThrow(() -> new UserNotFoundException(name));
    }

    public User findUser(UUID userId) {
        return userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException(userId.toString()));
    }
}
