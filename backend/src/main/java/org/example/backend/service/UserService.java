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

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User saveUser(User user) {
        repo.save(user);
        return repo.findById(user.get_id()).orElseThrow();
    }

    public User getUserById(String id){
        return repo.findById(id).orElseThrow();
    }

    public void deleteUserById(String id) {
        repo.deleteById(id);
    }

   /* public User updateUser(User user) {
        repo.save(user);
        return repo.findById(user.get_id()).orElseThrow();
    }*/

}