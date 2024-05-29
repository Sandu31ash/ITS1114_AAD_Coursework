package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.InventoryDTO;
import lk.ijse.its1114aadcoursework1.entity.InventoryEntity;
import lk.ijse.its1114aadcoursework1.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/getAll")
    public List<InventoryDTO> getAllInventory(){
        return inventoryService.getAllInventory();
    }

    @GetMapping("/get")
    public ResponseEntity<?> getInventoryByItemCode(@RequestHeader String invCode){
        InventoryDTO inventoryDTO = inventoryService.getInventoryByItemCode(invCode);
        return ResponseEntity.ok(inventoryDTO);
    }

    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateInventory(@RequestBody InventoryDTO inventoryDTO) {
        inventoryService.updateInventory(inventoryDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteInventory(@RequestHeader String itemCode){
        inventoryService.deleteInventory(itemCode);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/getAllItemDesc")
    public List<String> getAllItemDesc() {
        return inventoryService.getAllItemDesc();
    }

}
