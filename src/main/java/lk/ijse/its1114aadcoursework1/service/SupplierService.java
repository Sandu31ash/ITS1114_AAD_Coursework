package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.SupplierDTO;

import java.util.List;

public interface SupplierService {
    SupplierDTO saveSupplier(SupplierDTO supplierDTO);
    List<SupplierDTO> getAllSupplier();
//    SupplierDTO getSelectedSupplier(String id);
//    void deleteSupplier(String sCode);
//    void updateSupplier(String sCode, SupplierDTO supplierDTO);
}
