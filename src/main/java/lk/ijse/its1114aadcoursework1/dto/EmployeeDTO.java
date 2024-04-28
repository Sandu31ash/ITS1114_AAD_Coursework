package lk.ijse.its1114aadcoursework1.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lk.ijse.its1114aadcoursework1.entity.AccessRole;
import lk.ijse.its1114aadcoursework1.entity.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeDTO {

    private String empCode;
    private String empName;
    private String proPic;
    private Gender gender;
    private String status;
    private String designation;
    private AccessRole accessRole;
    private Date dob;
    private Date dateOfJoin;
    private String attBranch;
    private String add1;
    private String add2;
    private String add3;
    private String add4;
    private String add5;
    private String contact;
    private String email;
    private String infCaseOfEmerg;
    private String emergContact;

}
