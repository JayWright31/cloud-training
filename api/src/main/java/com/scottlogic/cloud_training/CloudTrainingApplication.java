package com.scottlogic.cloud_training;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class CloudTrainingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudTrainingApplication.class, args);
	}

}
