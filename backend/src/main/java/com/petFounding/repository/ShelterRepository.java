package com.petFounding.repository;

import com.petFounding.entity.Shelter;

import java.util.List;

public interface ShelterRepository {
    Shelter guardar(Shelter refugio);
    Shelter modificar(Shelter refugio);
    void eliminar(Long id);
    Shelter buscarPorId(Long id);
    Shelter buscarPorNombre(String nombreRefugio);
    List<Shelter> buscarTodos();
    Boolean existePorNombre(String nombreRefugio);
}