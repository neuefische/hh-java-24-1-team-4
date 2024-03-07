package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.User;
import org.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
private final UserRepository repo;

    public List<User> getUserById(){
        return repo.findAll();
    }

    public User saveNewUser(User user) {
        repo.save(user);
        return repo.findById(user.getId()).orElseThrow();
    }

    /*public User updateUserById(User user) {
        repo.save(user);
        return repo.findById(user.getId()).orElseThrow();
    }

    public User deleteUserById(User user) {
        repo.delete(user);
        return user;
    }*/

}
