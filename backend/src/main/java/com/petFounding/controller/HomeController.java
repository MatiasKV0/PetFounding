package com.petFounding.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "========================================\n" +
                "PET FOUNDING BACKEND\n" +
                "========================================\n\n" +
                " Estado: FUNCIONANDO\n" +
                " Puerto: 3000\n" +
                " Hora: " + LocalDateTime.now() + "\n\n" +
                "========================================";
    }

    @GetMapping("/api/test")
    public String test() {
        return "¡Backend funcionando! ✅";
    }
}
