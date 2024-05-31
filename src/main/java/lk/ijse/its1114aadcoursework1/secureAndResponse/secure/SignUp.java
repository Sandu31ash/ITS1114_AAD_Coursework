package lk.ijse.its1114aadcoursework1.secureAndResponse.secure;

import lk.ijse.its1114aadcoursework1.entity.AccessRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignUp {
    private String email;
    private String password;
    private AccessRole role;
}
