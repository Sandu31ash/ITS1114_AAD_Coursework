package lk.ijse.its1114aadcoursework1.dao;

import lk.ijse.its1114aadcoursework1.entity.InventoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepo extends JpaRepository<InventoryEntity, String> {
    InventoryEntity getInventoryByItemCode(String itemCode);
}
