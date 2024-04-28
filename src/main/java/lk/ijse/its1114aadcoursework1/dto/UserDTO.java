package lk.ijse.its1114aadcoursework1.dto;

import lk.ijse.its1114aadcoursework1.entity.AccessRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {

    private String email;
    private String pw;
    private AccessRole accessRole;

}
