package lk.ijse.its1114aadcoursework1.dao;

import lk.ijse.its1114aadcoursework1.entity.CustomerEntity;
import lk.ijse.its1114aadcoursework1.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity, String> {
    UserEntity getUserByEmail(String email);
}
