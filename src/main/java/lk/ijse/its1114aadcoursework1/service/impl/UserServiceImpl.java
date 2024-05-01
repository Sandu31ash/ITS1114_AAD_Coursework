package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.UserRepo;
import lk.ijse.its1114aadcoursework1.dto.UserDTO;
import lk.ijse.its1114aadcoursework1.entity.CustomerEntity;
import lk.ijse.its1114aadcoursework1.entity.UserEntity;
import lk.ijse.its1114aadcoursework1.service.UserService;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    private final Mapping mapping;

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        return mapping.toUserDTO(userRepo.save(mapping.toUser(userDTO)));
    }

    @Override
    public List<UserDTO> getAllUser() {
        return mapping.toUserDTOList(userRepo.findAll());
    }

    @Override
    public UserDTO getUserByEmail(String email) {
        return mapping.toUserDTO(userRepo.getUserByEmail(email));
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        UserEntity user = userRepo.getUserByEmail(userDTO.getEmail());
        user.setPw(userDTO.getPw());
        user.setAccessRole(userDTO.getAccessRole());
    }

    @Override
    public void deleteUser(String email) {
        userRepo.deleteById(email);
    }
}
