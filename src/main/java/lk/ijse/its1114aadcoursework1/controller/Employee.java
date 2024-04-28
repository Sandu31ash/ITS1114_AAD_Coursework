package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.EmployeeDTO;
import lk.ijse.its1114aadcoursework1.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employee")
@RequiredArgsConstructor
public class Employee {
    private final EmployeeService employeeService;

    @GetMapping("health")
    public String healthCheck(){
        return "Employee Health OK";
    }

    @PostMapping("/save")
    public EmployeeDTO saveEmployee(@RequestBody EmployeeDTO employeeDTO){
        return employeeService.saveEmployee(employeeDTO);
    }

    @GetMapping("/get")
    public List<EmployeeDTO> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

}
