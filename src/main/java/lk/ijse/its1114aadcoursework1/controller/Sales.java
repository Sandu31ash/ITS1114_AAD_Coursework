package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.SalesDTO;
import lk.ijse.its1114aadcoursework1.service.SalesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/getAll")
    public List<SalesDTO> getAllSales(){
        return salesService.getAllSales();
    }

    @GetMapping("get")
    public ResponseEntity<?> getSalesByOrderNo(@RequestHeader String orderNo){
        SalesDTO salesDTO = salesService.getSalesByOrderNo(orderNo);
        return ResponseEntity.ok(salesDTO);
    }


    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateSales(@RequestBody SalesDTO salesDTO) {
        salesService.updateSales(salesDTO);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteSales(@RequestHeader String orderNo){
        salesService.deleteSales(orderNo);
        return ResponseEntity.ok().build();
    }

}
