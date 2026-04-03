package com.agam.SpringSecEx.Service;

import com.agam.SpringSecEx.Entity.UserEntity;
import com.agam.SpringSecEx.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final AuthenticationManager authManager;
    private final JwtService jwtService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    public UserEntity addUser(UserEntity user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String verify(UserEntity user) {
        Authentication auth =
                authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        if(auth.isAuthenticated()) {
            return jwtService.generateToken(user.getUsername());
        }
        return "failed";
    }
}
