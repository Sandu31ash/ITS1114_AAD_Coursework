package lk.ijse.its1114aadcoursework1.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDTO {

    private String cCode;
    private String cName;
    private String gender;
    private Date jDate;
    private String level;
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

    public void setCCode(String toString) {

    }

}
