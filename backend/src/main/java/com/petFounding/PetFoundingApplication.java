package com.petFounding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.petFounding")
public class PetFoundingApplication {

    public static void main(String[] args) {
        SpringApplication.run(PetFoundingApplication.class, args);
    }
}