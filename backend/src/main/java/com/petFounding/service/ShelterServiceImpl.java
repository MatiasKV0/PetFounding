package com.petFounding.service;


import com.petFounding.entity.Pet;
import com.petFounding.entity.Shelter;
import com.petFounding.interfacee.ShelterService;
import com.petFounding.repository.PetRepository;
import com.petFounding.repository.ShelterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("shelterService")
@Transactional
public class ShelterServiceImpl implements ShelterService {

    private ShelterRepository shelterRepository;
    private PetRepository petRepository;

    @Autowired
    public ShelterServiceImpl(ShelterRepository shelterRepository, PetRepository petRepository) {
        this.shelterRepository = shelterRepository;
        this.petRepository = petRepository;
    }

    @Override
    public Shelter crearRefugio(Shelter refugio) {
//        if (shelterRepository.existePorNombre(refugio.getNombreRefugio())) {
//            throw new RuntimeException("El nombre del refugio ya existe");
//        }
        return shelterRepository.guardar(refugio);
    }

    @Override
    public Shelter actualizarRefugio(Long id, Shelter refugio) {
        Shelter refugioExistente = shelterRepository.buscarPorId(id);

//        if (refugioExistente == null) {
//            throw new RuntimeException("Refugio no encontrado");
//        }

        refugioExistente.setNombreRefugio(refugio.getNombreRefugio());
        refugioExistente.setDireccion(refugio.getDireccion());

        return shelterRepository.modificar(refugioExistente);
    }

    @Override
    public void eliminarRefugio(Long id) {
        Shelter refugio = shelterRepository.buscarPorId(id);

//        if (refugio == null) {
//            throw new RuntimeException("Refugio no encontrado");
//        }

        shelterRepository.eliminar(id);
    }

    @Override
    public Shelter obtenerRefugioPorId(Long id) {
        Shelter refugio = shelterRepository.buscarPorId(id);

//        if (refugio == null) {
//            throw new RuntimeException("Refugio no encontrado");
//        }

        return refugio;
    }

    @Override
    public Shelter obtenerRefugioPorNombre(String nombre) {
        Shelter refugio = shelterRepository.buscarPorNombre(nombre);

//        if (refugio == null) {
//            throw new RuntimeException("Refugio no encontrado");
//        }

        return refugio;
    }

    @Override
    public List<Shelter> obtenerTodosLosRefugios() {
        return shelterRepository.buscarTodos();
    }

    @Override
    public Pet crearMascota(Pet mascota, Long idRefugio) {
        Shelter refugio = shelterRepository.buscarPorId(idRefugio);

//        if (refugio == null) {
//            throw new RuntimeException("Refugio no encontrado");
//        }

        mascota.setRefugio(refugio);
        return petRepository.guardar(mascota);
    }

    @Override
    public Pet actualizarMascota(Long idMascota, Pet mascota) {
        Pet mascotaExistente = petRepository.buscarPorId(idMascota);

//        if (mascotaExistente == null) {
//            throw new RuntimeException("Mascota no encontrada");
//        }

        mascotaExistente.setNombre(mascota.getNombre());
        mascotaExistente.setRaza(mascota.getRaza());
        mascotaExistente.setEdad(mascota.getEdad());

        return petRepository.modificar(mascotaExistente);
    }

    @Override
    public void eliminarMascota(Long idMascota) {
        Pet mascota = petRepository.buscarPorId(idMascota);

//        if (mascota == null) {
//            throw new RuntimeException("Mascota no encontrada");
//        }

        petRepository.eliminar(idMascota);
    }

    @Override
    public List<Pet> gestionarSolicitudes(Long idRefugio) {
        Shelter refugio = shelterRepository.buscarPorId(idRefugio);

        if (refugio == null) {
            throw new RuntimeException("Refugio no encontrado");
        }

        return petRepository.buscarPorRefugio(refugio);
    }

    @Override
    public void verReportes(Long idRefugio) {
        Shelter refugio = shelterRepository.buscarPorId(idRefugio);

        if (refugio == null) {
            throw new RuntimeException("Refugio no encontrado");
        }

        // Implementar lógica para ver reportes del refugio
    }
}