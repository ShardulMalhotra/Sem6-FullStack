package com.agam.SpringSecEx.Controller;

import com.agam.SpringSecEx.Entity.UserEntity;
import com.agam.SpringSecEx.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public UserEntity register(@RequestBody UserEntity user) {
        userService.addUser(user);
        return user;
    }

    @PostMapping("/login")
    public String login(@RequestBody UserEntity user) {
        return userService.verify(user);
    }
}
