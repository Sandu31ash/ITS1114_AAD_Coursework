package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    private String sCode;
    private String sName;
    private String category;
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
