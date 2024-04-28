package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.UserDTO;

import java.util.List;

public interface UserService {

    UserDTO saveUser(UserDTO userDTO);
    List<UserDTO> getAllUser();
//    UserDTO getSelectedUser(String cCode);
//    void deleteUser(String cCode);
//    void updateUser(String cCode, UserDTO userDTO);

}
