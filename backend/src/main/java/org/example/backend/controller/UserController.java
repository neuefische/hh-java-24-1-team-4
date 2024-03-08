package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.model.User;
import org.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
        return service.saveUser(user);
    }
    @PutMapping("{id}")
    public User updateUserById(@PathVariable String id, @RequestBody User user){
        if (!user.get_id().equals(id)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The id in the url does not match the request body's id");
        }
        return service.saveUser(user);
    }
    @DeleteMapping("{id}")
    public void deleteUserById(@PathVariable String id){service.deleteUserById(id);}
}
