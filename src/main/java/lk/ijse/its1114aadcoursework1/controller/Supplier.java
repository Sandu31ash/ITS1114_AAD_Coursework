package lk.ijse.its1114aadcoursework1.controller;


import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.SupplierDTO;
import lk.ijse.its1114aadcoursework1.service.CustomerService;
import lk.ijse.its1114aadcoursework1.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    public SupplierDTO saveSupplier(@RequestBody SupplierDTO supplierDTO){
        return supplierService.saveSupplier(supplierDTO);
    }

    public List<SupplierDTO> getAllSupplier(){
        return supplierService.getAllSupplier();
    }
}
