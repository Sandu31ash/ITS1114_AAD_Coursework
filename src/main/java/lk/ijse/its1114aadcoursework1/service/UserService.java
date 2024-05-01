package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.UserDTO;

import java.util.List;

public interface UserService {

    UserDTO saveUser(UserDTO userDTO);
    List<UserDTO> getAllUser();
    UserDTO getUserByEmail(String email);
    void updateUser(UserDTO userDTO);
    void deleteUser(String email);

}
