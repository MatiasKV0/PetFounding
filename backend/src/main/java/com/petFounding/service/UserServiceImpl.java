package com.petFounding.service;

import com.petFounding.entity.User;
import com.petFounding.interfacee.UserService;
import com.petFounding.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registrar(User usuario) {
        // TODO:dejarlo para el final asi le agregamos todas las validacions y lablbalabla
        return null;
    }
//        if (userRepository.existePorEmail(usuario.getEmail())) {
//            throw new RuntimeException("El email ya existe");
//        }
//
//        usuario.setFechaRegistro(LocalDate.now());
//        usuario.setActivo(true);
//        return userRepository.guardar(usuario);
//    }

    @Override
    public User login(String email, String password) {
        return null;
    }
//        User usuario = userRepository.buscarPorEmailYPassword(email, password);
//
//        if (usuario == null) {
//            throw new RuntimeException("Credenciales incorrectas");
//        }
//
//        return usuario;
//    }

    @Override
    public User actualizarPerfil(Long id, User usuario) {

//        User usuarioExistente = userRepository.buscarPorId(id);
//
//        if (usuarioExistente == null) {
//            throw new RuntimeException("Usuario no encontrado");
//        }
//
//        usuarioExistente.setNombre(usuario.getNombre());
//        usuarioExistente.setApellido(usuario.getApellido());
//        usuarioExistente.setTelefono(usuario.getTelefono());
//        usuarioExistente.setDireccion(usuario.getDireccion());
//
//        return userRepository.modificar(usuarioExistente);
        return null;
    }

    @Override
    public void eliminarCuenta(Long id) {
        User usuario = userRepository.buscarPorId(id);

        if (usuario == null) {
            throw new RuntimeException("Usuario no encontrado");
        }

        usuario.setActivo(false);
        userRepository.modificar(usuario);
    }

    @Override
    public User obtenerUsuarioPorId(Long id) {
        User usuario = userRepository.buscarPorId(id);

        if (usuario == null) {
            throw new RuntimeException("Usuario no encontrado");
        }

        return usuario;
    }

    @Override
    public User obtenerUsuarioPorEmail(String email) {
      return null;
    }

    @Override
    public List<User> obtenerTodosLosUsuarios() {
        return userRepository.buscarTodos();
    }

    @Override
    public Boolean existeEmail(String email) {
        return userRepository.existePorEmail(email);
    }
}