package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.SalesDTO;

import java.util.List;

public interface SalesService {

    SalesDTO saveSales(SalesDTO salesDTO);
    List<SalesDTO> getAllSales();
//    SalesDTO getSelectedSales(String cCode);
//    void deleteSales(String cCode);
//    void updateSales(String cCode, SalesDTO salesDTO);

}
