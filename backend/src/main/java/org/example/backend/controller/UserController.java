package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.User;
import org.example.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {


    private final UserService service;

    @GetMapping
    public List<User> getAllUsers(){
        return service.getAllUsers();
    }
    @GetMapping("{id}")
    public User getUserById(@PathVariable String id){
        return service.getUserById(id);
    }
    @PostMapping
    public User saveNewUser(@RequestBody User user){
        return service.saveNewUser(user);
    }
    @PutMapping
    public User updateUserById(@RequestBody User user){
        return service.updateUserById(user);
    }
    @DeleteMapping
    public User deleteUserById(@RequestBody User user){
        return service.deleteUserById(user);
    }

}
