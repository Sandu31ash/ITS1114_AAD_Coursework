package lk.ijse.its1114aadcoursework1.dto;

import lk.ijse.its1114aadcoursework1.entity.Gender;
import lk.ijse.its1114aadcoursework1.entity.Level;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.sql.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDTO {

    private String cusCode;
    private String cusName;
    private Gender gender;
    private Date joinedDate;
    private Level level;
    private int totPoints;
    private Date dob;
    private String add1;
    private String add2;
    private String add3;
    private String add4;
    private String add5;
    private String contact;
    private String email;
    private Timestamp recPurData;

}
