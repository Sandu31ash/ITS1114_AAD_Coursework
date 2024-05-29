package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor
public class Customer {
    private final CustomerService customerService;

    @GetMapping("/health")
    public String healthCheck(){
        return "Customer Health OK";
    }

    @PostMapping("/save")
    public CustomerDTO saveCustomer(@RequestBody CustomerDTO customerDTO){
        System.out.println(customerDTO);
        return customerService.saveCustomer(customerDTO);
    }

    @GetMapping("/getAll")
    public List<CustomerDTO> getAllCustomer(){
        return customerService.getAllCustomer();
    }

    @GetMapping("/get")
    public ResponseEntity<?> getCustomerByCusCode(@RequestHeader String cusCode){
        CustomerDTO customerDTO = customerService.getCustomerByCusCode(cusCode);
        return ResponseEntity.ok(customerDTO);
    }


    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateCustomer(@RequestBody CustomerDTO customerDTO) {
        customerService.updateCustomer(customerDTO);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteCustomer(@RequestHeader String cusCode){
        customerService.deleteCustomer(cusCode);
        return ResponseEntity.ok().build();
    }

}
