package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
public class TestController {

    List<Map<String, String>> users = new ArrayList<>();

    // GET → fetch all users
    @GetMapping("/users")
    public List<Map<String, String>> getUsers() {
        return users;
    }

    // POST → add user
    @PostMapping("/users")
    public String addUser(@RequestBody Map<String, String> user) {
        users.add(user);
        return "User added: " + user;
    }

    // PUT → update user by index
    @PutMapping("/users/{index}")
    public String updateUser(@PathVariable int index,
                             @RequestBody Map<String, String> updatedUser) {

        if (index < users.size()) {
            users.set(index, updatedUser);
            return "User updated at index " + index;
        } else {
            return "User not found!";
        }
    }

    // DELETE → delete user by index
    @DeleteMapping("/users/{index}")
    public String deleteUser(@PathVariable int index) {

        if (index < users.size()) {
            users.remove(index);
            return "User deleted at index " + index;
        } else {
            return "User not found!";
        }
    }
}