package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.UserDTO;
import lk.ijse.its1114aadcoursework1.service.UserService;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class User {

    private final UserService userService;

    @GetMapping("/health")
    public String healthCheck(){
        return "User Health OK";
    }

    @PostMapping("/save")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }

    @GetMapping("/getAll")
    public List<UserDTO> getAllUser(){
        return userService.getAllUser();
    }

    @GetMapping("get")
    public ResponseEntity<?> getUserByEmail(@RequestHeader String email){
        UserDTO userDTO = userService.getUserByEmail(email);
        return ResponseEntity.ok(userDTO);
    }

    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO) {
        userService.updateUser(userDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteUser(@RequestHeader String email){
        userService.deleteUser(email);
        return ResponseEntity.ok().build();
    }

}
