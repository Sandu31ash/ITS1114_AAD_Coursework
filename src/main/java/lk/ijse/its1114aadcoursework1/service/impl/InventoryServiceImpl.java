package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.InventoryRepo;
import lk.ijse.its1114aadcoursework1.dto.InventoryDTO;
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
}
