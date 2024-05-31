package lk.ijse.its1114aadcoursework1.dto;

import lk.ijse.its1114aadcoursework1.entity.AccessRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private String email;
    private String password;
    private AccessRole role;
}

//{
//        "id":"C001",
//        "firstName":"Ash",
//        "lastName":"FEMALE",
//        "email": "ash@gmail.com",
//        "password":"1234",
//        "role": "ADMIN"
//        }