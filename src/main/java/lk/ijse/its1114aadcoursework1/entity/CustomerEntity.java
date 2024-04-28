package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="customer")
@Entity
public class CustomerEntity implements SuperEntity {
    @Id
    private String cusCode;
    private String cusName;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private Date joinedDate;
    @Enumerated(EnumType.STRING)
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

//{
//        "cusCode":"C001",
//        "cusName":"Ash",
//        "gender":"FEMALE",
//        "joinedDate": "2024-01-25",
//        "level":"GOLD",
//        "totPoints":100,
//        "dob":"2000-02-25",
//        "add1":"1",
//        "add2":"1",
//        "add3":"1",
//        "add4":"1",
//        "add5":"1",
//        "contact":"1",
//        "email":"1",
//        "recPurData":"2024-04-28T06:16:48.607+00:00"
//        }



//entity --> dto --> repo --> service --> mapping --> impl --> controller