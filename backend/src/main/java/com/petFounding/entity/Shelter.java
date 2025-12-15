package com.petFounding.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Shelter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreRefugio;
    private String direccion;

    @OneToMany(mappedBy = "refugio", cascade = CascadeType.ALL)
    private List<Pet> mascotas = new ArrayList<>();

    @OneToMany(mappedBy = "refugio", cascade = CascadeType.ALL)
    private List<Donation> donaciones = new ArrayList<>();

    @OneToMany(mappedBy = "refugio", cascade = CascadeType.ALL)
    private List<FinancialReport> reportesFinancieros = new ArrayList<>();

    @OneToMany(mappedBy = "refugio", cascade = CascadeType.ALL)
    private List<AdoptionReport> reportesAdopciones = new ArrayList<>();

    public Shelter(String nombreRefugio, String direccion) {
        this.nombreRefugio = nombreRefugio;
        this.direccion = direccion;
    }
}