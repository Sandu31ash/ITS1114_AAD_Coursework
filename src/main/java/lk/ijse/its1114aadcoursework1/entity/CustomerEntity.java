package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="customer")
@Entity
public class CustomerEntity implements SuperEntity {
    @Id
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
}


//{
//        "cCode":"C001",
//        "cName":"Ash",
//        "gender":"female",
//        "jDate": "2024-01-25",
//        "level":"gold",
//        "totPoints":100,
//        "dob":"2000-02-25",
//        "add1":"1",
//        "add2":"1",
//        "add3":"1",
//        "add4":"1",
//        "add5":"1",
//        "contact":"1",
//        "email":"1",
//        "recPurData":""
//        }