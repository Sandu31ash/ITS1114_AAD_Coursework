package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="supplier")
@Entity
public class SupplierEntity implements SuperEntity{
    @Id
    private String supCode;
    private String supName;
    @Enumerated(EnumType.STRING)
    private Category category;
    private String add1;
    private String add2;
    private String add3;
    private String add4;
    private String add5;
    private String add6;
    private String contact1;
    private String contact2;
    private String email;
}


//{
//        "supCode":"S001",
//        "supName":"Nike",
//        "category":"INTERNATIONAL",
//        "add1":"Nike",
//        "add2":"One Bowerman Dr",
//        "add3":"Beaverton",
//        "add4":"Oregon",
//        "add5":"OR 97005",
//        "add6":"United States",
//        "contact1":"+15036716453",
//        "contact2":"1-800-806-6453",
//        "email":"nike@gmail.com"
//        }