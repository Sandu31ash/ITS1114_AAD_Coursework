package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.SalesDTO;
import lk.ijse.its1114aadcoursework1.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sales")
@RequiredArgsConstructor
public class Sales {

    private final SalesService salesService;

    @GetMapping("/health")
    public String healthCheck(){
        return "Sales Health OK";
    }

    @PostMapping("/save")
    public SalesDTO saveSales(@RequestBody SalesDTO salesDTO){
        return salesService.saveSales(salesDTO);
    }

    @GetMapping("/get")
    public List<SalesDTO> getAllSales(){
        return salesService.getAllSales();
    }

}
