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
    private String orderNo;
    private String cusName;
    private String itemCode;
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





//{
//        "itemCode":"FSM00001",
//        "orderNo":"HSO001",
//        "cusName":"S.A.Senevirathne",
//        "itemDesc":"Mens Formal Shoe",
//        "size":8,
//        "unitPrice":8990.00,
//        "itemQty":1,
//        "totPrice":8990.00,
//        "purDate":"2024-04-28",
//        "payMethod":"Cash",
//        "addedPoints":2.5,
//        "cashierName":"Vidushi"
//        }