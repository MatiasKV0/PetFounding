package com.petFounding.service;


import com.petFounding.entity.Pet;
import com.petFounding.entity.Shelter;
import com.petFounding.enumerator.AdoptionStatus;
import com.petFounding.enumerator.Sex;
import com.petFounding.enumerator.Size;
import com.petFounding.interfacee.PetService;
import com.petFounding.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service("petService")
@Transactional
public class PetServiceImpl implements PetService {

    private PetRepository petRepository;

    @Autowired
    public PetServiceImpl(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @Override
    public Pet registrarMascota(Pet mascota) {
        mascota.setFechaIngreso(LocalDate.now());
        mascota.setEstadoAdopcion(AdoptionStatus.DISPONIBLE);
        return petRepository.guardar(mascota);
    }

    @Override
    public Pet actualizarMascota(Long id, Pet mascota) {
        Pet mascotaExistente = petRepository.buscarPorId(id);

        if (mascotaExistente == null) {
            throw new RuntimeException("Mascota no encontrada");
        }

        mascotaExistente.setNombre(mascota.getNombre());
        mascotaExistente.setRaza(mascota.getRaza());
        mascotaExistente.setEdad(mascota.getEdad());
        mascotaExistente.setDescripcion(mascota.getDescripcion());
        mascotaExistente.setSexo(mascota.getSexo());
        mascotaExistente.setTamano(mascota.getTamano());
        mascotaExistente.setEsterilizado(mascota.getEsterilizado());
        mascotaExistente.setVacunado(mascota.getVacunado());

        return petRepository.modificar(mascotaExistente);
    }

    @Override
    public void eliminarMascota(Long id) {
        Pet mascota = petRepository.buscarPorId(id);

//        if (mascota == null) {
//            throw new RuntimeException("Mascota no encontrada");
//        }

        petRepository.eliminar(id);
    }

    @Override
    public Pet obtenerDetalle(Long id) {
        Pet mascota = petRepository.buscarPorId(id);

//        if (mascota == null) {
//            throw new RuntimeException("Mascota no encontrada");
//        }

        return mascota;
    }

    @Override
    public Pet actualizarEstado(Long id, AdoptionStatus nuevoEstado) {
        Pet mascota = petRepository.buscarPorId(id);

//        if (mascota == null) {
//            throw new RuntimeException("Mascota no encontrada");
//        }

        mascota.setEstadoAdopcion(nuevoEstado);
        return petRepository.modificar(mascota);
    }

    @Override
    public Pet agregarFoto(Long id, String urlFoto) {
        Pet mascota = petRepository.buscarPorId(id);

//        if (mascota == null) {
//            throw new RuntimeException("Mascota no encontrada");
//        }



        return petRepository.modificar(mascota);
    }

    @Override
    public List<Pet> obtenerTodasLasMascotas() {
        return petRepository.buscarTodos();
    }

    @Override
    public List<Pet> obtenerMascotasPorRefugio(Shelter refugio) {
        return petRepository.buscarPorRefugio(refugio);
    }

    @Override
    public List<Pet> obtenerMascotasPorEstado(AdoptionStatus estado) {
        return petRepository.buscarPorEstado(estado);
    }

    @Override
    public List<Pet> obtenerMascotasPorSexo(Sex sexo) {
        return petRepository.buscarPorSexo(sexo);
    }

    @Override
    public List<Pet> obtenerMascotasPorTamano(Size tamano) {
        return petRepository.buscarPorTamano(tamano);
    }
}
