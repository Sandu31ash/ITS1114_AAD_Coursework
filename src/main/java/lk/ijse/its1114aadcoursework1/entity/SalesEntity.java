package lk.ijse.its1114aadcoursework1.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.sql.Timestamp;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="sales")
@Entity
public class SalesEntity implements SuperEntity{

    @Id
    private String orderNo;
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "cusName", referencedColumnName = "customerName")
//    @JsonBackReference
//    private CustomerEntity customerEntity;
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

//    @OneToMany(fetch = FetchType.EAGER,mappedBy = "orders", cascade = CascadeType.ALL) @Fetch(FetchMode.JOIN)
//    @JsonManagedReference
//    private List<OrderItem> orderItems;

//    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
//    private List<Orders> orders;

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