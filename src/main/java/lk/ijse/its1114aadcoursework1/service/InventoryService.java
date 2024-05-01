package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.InventoryDTO;

import java.util.List;

public interface InventoryService {
    InventoryDTO saveInventory(InventoryDTO inventoryDTO);
    List<InventoryDTO> getAllInventory();
    InventoryDTO getInventoryByItemCode(String itemCode);
    void updateInventory(InventoryDTO inventoryDTO);
    void deleteInventory(String invCode);
}
