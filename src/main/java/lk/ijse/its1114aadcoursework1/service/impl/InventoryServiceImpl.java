package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.InventoryRepo;
import lk.ijse.its1114aadcoursework1.dto.InventoryDTO;
import lk.ijse.its1114aadcoursework1.entity.CustomerEntity;
import lk.ijse.its1114aadcoursework1.entity.InventoryEntity;
import lk.ijse.its1114aadcoursework1.service.InventoryService;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class InventoryServiceImpl implements InventoryService {

    private final InventoryRepo inventoryRepo;

    private final Mapping mapping;

    @Override
    public InventoryDTO saveInventory(InventoryDTO inventoryDTO) {
        return mapping.toInventoryDTO(inventoryRepo.save(mapping.toInventory(inventoryDTO)));
    }

    @Override
    public List<InventoryDTO> getAllInventory() {
        return mapping.toInventoryDTOList(inventoryRepo.findAll());
    }

    @Override
    public InventoryDTO getInventoryByItemCode(String itemCode) {
        return mapping.toInventoryDTO(inventoryRepo.getInventoryByItemCode(itemCode));
    }

    @Override
    public void updateInventory(InventoryDTO inventoryDTO) {
        InventoryEntity inventory = inventoryRepo.getInventoryByItemCode(inventoryDTO.getItemCode());
        inventory.setItemDesc(inventoryDTO.getItemDesc());
        inventory.setItemPic(inventoryDTO.getItemPic());
        inventory.setCategory(inventoryDTO.getCategory());
        inventory.setSize(inventoryDTO.getSize());
        inventory.setQty(inventoryDTO.getQty());
        inventory.setSupCode(inventoryDTO.getSupCode());
        inventory.setSupName(inventoryDTO.getSupName());
        inventory.setUnitPriceSale(inventoryDTO.getUnitPriceSale());
        inventory.setUnitPriceBuy(inventoryDTO.getUnitPriceBuy());
        inventory.setExpProfit(inventoryDTO.getExpProfit());
        inventory.setProfitMargin(inventoryDTO.getProfitMargin());
        inventory.setStatus(inventoryDTO.getStatus());
        inventoryRepo.save(inventory);
    }

    @Override
    public void deleteInventory(String itemCode) {
        inventoryRepo.deleteById(itemCode);
    }
}
