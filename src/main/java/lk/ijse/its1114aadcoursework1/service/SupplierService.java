package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.SupplierDTO;

import java.util.List;

public interface SupplierService {
    SupplierDTO saveSupplier(SupplierDTO supplierDTO);
    List<SupplierDTO> getAllSupplier();
    SupplierDTO getSupplierBySupCode(String supCode);
    void updateSupplier(SupplierDTO supplierDTO);
    void deleteSupplier(String supCode);
}
