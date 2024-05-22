package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="employee")
@Entity
public class EmployeeEntity implements SuperEntity{

    @Id
    private String empCode;
    private String empName;
    private String proPic;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private String status;
    private String designation;
    @Enumerated(EnumType.STRING)
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





//{
//        "empCode":"HSE001",
//        "empName":"Suresh Perera",
//        "proPic":"abc",
//        "Gender":"Male",
//        "status":"Married",
//        "designation":"Manager",
//        "AccessRole":"ADMIN",
//        "dob":"1992-07-21",
//        "dateOfJoin":"2018-01-28",
//        "attBranch":"Galle",
//        "add1":"No 02",
//        "add2":"Dambulla Road",
//        "add3":"Matale",
//        "add4":"Central Province",
//        "add5":"21000",
//        "contact":"0779991125",
//        "email":"suresh.p@hello.com",
//        "intCaseOfEmerg":"Wife",
//        "emergContact":"07799991127"
//        }