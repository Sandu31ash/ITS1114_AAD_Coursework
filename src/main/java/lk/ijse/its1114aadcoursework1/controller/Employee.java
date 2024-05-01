package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.EmployeeDTO;
import lk.ijse.its1114aadcoursework1.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/getAll")
    public List<EmployeeDTO> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

    @GetMapping("get")
    public ResponseEntity<?> getEmployeeByCusCode(@RequestHeader String empCode){
        EmployeeDTO employeeDTO = employeeService.getEmployeeByEmpCode(empCode);
        return ResponseEntity.ok(employeeDTO);
    }


    @PutMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateEmployee(@RequestBody EmployeeDTO employeeDTO) {
        employeeService.updateEmployee(employeeDTO);
        return ResponseEntity.ok().build();
    }


    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteEmployee(@RequestHeader String empCode){
        employeeService.deleteEmployee(empCode);
        return ResponseEntity.ok().build();
    }

}
