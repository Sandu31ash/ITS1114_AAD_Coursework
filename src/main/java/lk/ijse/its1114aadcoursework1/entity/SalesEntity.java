package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="sales")
@Entity
public class SalesEntity implements SuperEntity{

    @Id
    private String itemCode;
    private String orderNo;
    private String cusName;
    private String itemDesc;
    private int size;
    private double unitPrice;
    private int itemQty;
    private double totPrice;
    private Timestamp purDate;
    private String payMethod;
    private double addedPoints;
    private String cashierName;

}
