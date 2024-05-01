package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.SalesDTO;

import java.util.List;

public interface SalesService {

    SalesDTO saveSales(SalesDTO salesDTO);
    List<SalesDTO> getAllSales();
    SalesDTO getSalesByOrderNo(String orderNo);
    void updateSales(SalesDTO salesDTO);
    void deleteSales(String orderNo);

}
