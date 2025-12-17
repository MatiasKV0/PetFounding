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
        sessionFactory.getCurrentSession().save(refugio);
        return refugio;  // ✅ CORRECTO - Retornar el refugio guardado
    }

    @Override
    public Shelter modificar(Shelter refugio) {
        sessionFactory.getCurrentSession().update(refugio);
        return refugio;  // ✅ CORRECTO - Retornar el refugio modificado
    }

    @Override
    public void eliminar(Long id) {
        Shelter refugio = buscarPorId(id);
        sessionFactory.getCurrentSession().delete(refugio);
    }

    @Override
    public Shelter buscarPorId(Long id) {
        return sessionFactory.getCurrentSession().get(Shelter.class, id);
    }

    @Override
    public Shelter buscarPorNombre(String nombreRefugio) {
        String hql = "FROM Shelter WHERE nombreRefugio = :nombreRefugio";
        return (Shelter) sessionFactory.getCurrentSession()
                .createQuery(hql)
                .setParameter("nombreRefugio", nombreRefugio)
                .uniqueResult();
    }

    @Override
    public List<Shelter> buscarTodos() {
        String hql = "FROM Shelter";
        return sessionFactory.getCurrentSession()
                .createQuery(hql, Shelter.class)
                .list();
    }

    @Override
    public Boolean existePorNombre(String nombreRefugio) {
        String hql = "SELECT COUNT(*) FROM Shelter WHERE nombreRefugio = :nombreRefugio";
        Long count = (Long) sessionFactory.getCurrentSession()
                .createQuery(hql)
                .setParameter("nombreRefugio", nombreRefugio)
                .uniqueResult();
        return count > 0;
    }
}