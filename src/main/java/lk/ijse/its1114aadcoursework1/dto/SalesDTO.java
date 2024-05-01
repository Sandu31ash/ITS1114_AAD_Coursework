package lk.ijse.its1114aadcoursework1.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SalesDTO {

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
