package com.petFounding.repository;

import com.petFounding.entity.Pet;
import com.petFounding.entity.Shelter;
import com.petFounding.enumerator.AdoptionStatus;
import com.petFounding.enumerator.Sex;
import com.petFounding.enumerator.Size;

import java.util.List;

public interface PetRepository {
    Pet guardar(Pet mascota);
    Pet modificar(Pet mascota);
    void eliminar(Long id);
    Pet buscarPorId(Long id);
    List<Pet> buscarPorRefugio(Shelter refugio);
    List<Pet> buscarPorEstado(AdoptionStatus estado);
    List<Pet> buscarPorSexo(Sex sexo);
    List<Pet> buscarPorTamano(Size tamano);
    List<Pet> buscarPorRaza(String raza);
    List<Pet> buscarTodos();
}