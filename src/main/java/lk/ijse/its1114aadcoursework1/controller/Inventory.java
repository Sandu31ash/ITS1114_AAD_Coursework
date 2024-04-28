package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.InventoryDTO;
import lk.ijse.its1114aadcoursework1.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/inventory")
@RequiredArgsConstructor
public class Inventory {
    private final InventoryService inventoryService;

    @GetMapping("health")
    public String healthCheck(){
        return "Inventory Health OK";
    }

    @PostMapping("/save")
    public InventoryDTO saveInventory(@RequestBody InventoryDTO inventoryDTO){
        return inventoryService.saveInventory(inventoryDTO);
    }

    @GetMapping("/get")
    public List<InventoryDTO> getAllInventory(){
        return inventoryService.getAllInventory();
    }

}
