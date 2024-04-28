package lk.ijse.its1114aadcoursework1.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminPanelDTO {

    private Date date;
    private double totSales;
    private double totProfit;
    private String mostSaleItem;
    private String mostSaleItemPic;
    private String mostSaleItemQty;

}
