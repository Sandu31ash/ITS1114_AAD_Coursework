package lk.ijse.its1114aadcoursework1.dao;

import lk.ijse.its1114aadcoursework1.entity.SalesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalesRepo extends JpaRepository<SalesEntity, String> {
    SalesEntity getSalesByOrderNo(String orderNo);
}
