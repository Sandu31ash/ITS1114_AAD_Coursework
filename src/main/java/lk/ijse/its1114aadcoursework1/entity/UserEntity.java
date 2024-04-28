package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="user")
@Entity
public class UserEntity implements SuperEntity{

    @Id
    private String email;
    private String pw;
    @Enumerated(EnumType.STRING)
    private AccessRole accessRole;

}
