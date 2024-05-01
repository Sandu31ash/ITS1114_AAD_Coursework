package lk.ijse.its1114aadcoursework1.controller;


import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.SupplierDTO;
import lk.ijse.its1114aadcoursework1.service.CustomerService;
import lk.ijse.its1114aadcoursework1.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/supplier")
@RequiredArgsConstructor
public class Supplier {
    private final SupplierService supplierService;

    @GetMapping("/health")
    public String healthCheck(){
        return "Supplier Health OK";
    }

    @PostMapping("/save")
    public SupplierDTO saveSupplier(@RequestBody SupplierDTO supplierDTO){
        return supplierService.saveSupplier(supplierDTO);
    }

    @GetMapping("/getAll")
    public List<SupplierDTO> getAllSupplier(){
        return supplierService.getAllSupplier();
    }

    @GetMapping("get")
    public ResponseEntity<?> getSupplierBySupCode(@RequestHeader String supCode){
        SupplierDTO supplierDTO = supplierService.getSupplierBySupCode(supCode);
        return ResponseEntity.ok(supplierDTO);
    }

    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateSupplier(@RequestBody SupplierDTO supplierDTO) {
        supplierService.updateSupplier(supplierDTO);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteSupplier(@RequestHeader String supCode){
        supplierService.deleteSupplier(supCode);
        return ResponseEntity.ok().build();
    }

}
