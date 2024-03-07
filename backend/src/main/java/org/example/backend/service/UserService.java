package org.example.backend.service;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.User;
import org.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
private final UserRepository repo;

    public User getUserById(String id){
        return repo.findById(id).orElseThrow();
    }

/*    public User saveNewUser(User user) {
        repo.save(user);
        return repo.findById(user.getId()).orElseThrow();
    }*/

    /*public User updateUserById(User user) {
        repo.save(user);
        return repo.findById(user.getId()).orElseThrow();
    }

    public User deleteUserById(User user) {
        repo.delete(user);
        return user;
    }*/

}
