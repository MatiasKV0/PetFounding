package com.petFounding.infraestructure;

import com.petFounding.entity.User;
import com.petFounding.repository.UserRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository("userRepository")
public class UserRepositoryImpl implements UserRepository {

    private SessionFactory sessionFactory;

    @Autowired
    public UserRepositoryImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public User guardar(User usuario) {

        return null;
    }

    @Override
    public User modificar(User usuario) {

        return null;
    }

    @Override
    public void eliminar(Long id) {

    }

    @Override
    public User buscarPorId(Long id) {

        return null;
    }

    @Override
    public User buscarPorEmail(String email) {

        return null;
    }

    @Override
    public User buscarPorEmailYPassword(String email, String password) {

        return null;
    }

    @Override
    public List<User> buscarTodos() {

        return null;
    }

    @Override
    public Boolean existePorEmail(String email) {

        return null;
    }
}