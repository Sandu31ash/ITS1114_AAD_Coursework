package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {

    EmployeeDTO saveEmployee(EmployeeDTO employeeDTO);
    List<EmployeeDTO> getAllEmployee();
//    EmployeeDTO getSelectedEmployee(String cCode);
//    void deleteEmployee(String cCode);
//    void updateEmployee(String cCode, EmployeeDTO employeeDTO);

}
