package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;
    @GetMapping
    public List<User> getUserById(){
        return service.getUserById();
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
