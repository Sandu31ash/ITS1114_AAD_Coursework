package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="inventory")
@Entity
public class InventoryEntity implements SuperEntity{

    @Id
    private String itemCode;
    private String itemDesc;
    private String itemPic;
    private String category;
    private int size;
    private int qty;
    private String supCode;
    private String supName;
    private double unitPriceSale;
    private double unitPriceBuy;
    private double expProfit;
    private double profitMargin;
    private String status;

}
