package com.petFounding.infraestructure;

import com.petFounding.entity.Shelter;
import com.petFounding.repository.ShelterRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository("shelterRepository")
public class ShelterRepositoryImpl implements ShelterRepository {

    private SessionFactory sessionFactory;

    @Autowired
    public ShelterRepositoryImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public Shelter guardar(Shelter refugio) {

        return null;
    }

    @Override
    public Shelter modificar(Shelter refugio) {

        return null;
    }

    @Override
    public void eliminar(Long id) {

    }

    @Override
    public Shelter buscarPorId(Long id) {

        return null;
    }

    @Override
    public Shelter buscarPorNombre(String nombreRefugio) {

        return null;
    }

    @Override
    public List<Shelter> buscarTodos() {

        return null;
    }

    @Override
    public Boolean existePorNombre(String nombreRefugio) {

        return null;
    }
}