package lk.ijse.its1114aadcoursework1.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="adminpanel")
@Entity
public class AdminPanelEntity implements SuperEntity{

    @Id
    private Date date;
    private double totSales;
    private double totProfit;
    private String mostSaleItem;
    private String mostSaleItemPic;
    private String mostSaleItemQty;

}
