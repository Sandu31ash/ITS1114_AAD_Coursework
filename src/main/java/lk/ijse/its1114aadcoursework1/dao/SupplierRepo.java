package lk.ijse.its1114aadcoursework1.dao;

import lk.ijse.its1114aadcoursework1.controller.Supplier;
import lk.ijse.its1114aadcoursework1.entity.CustomerEntity;
import lk.ijse.its1114aadcoursework1.entity.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepo extends JpaRepository<SupplierEntity, String> {
    SupplierEntity getSupplierBySupCode(String supCode);
}
