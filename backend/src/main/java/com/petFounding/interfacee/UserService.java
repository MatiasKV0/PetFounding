package com.petFounding.interfacee;


import com.petFounding.entity.User;

import java.util.List;

public interface UserService {
        User registrar(User usuario);
        User login(String email, String password);
        User actualizarPerfil(Long id, User usuario);
        void eliminarCuenta(Long id);
        User obtenerUsuarioPorId(Long id);
        User obtenerUsuarioPorEmail(String email);
        List<User> obtenerTodosLosUsuarios();
        Boolean existeEmail(String email);
    }