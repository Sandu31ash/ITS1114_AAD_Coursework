package lk.ijse.its1114aadcoursework1.dto;

import lk.ijse.its1114aadcoursework1.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SupplierDTO {

    private String supCode;
    private String supName;
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
