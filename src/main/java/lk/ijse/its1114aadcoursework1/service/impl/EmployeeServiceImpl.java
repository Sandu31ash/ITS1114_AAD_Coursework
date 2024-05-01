package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.controller.Employee;
import lk.ijse.its1114aadcoursework1.dao.EmployeeRepo;
import lk.ijse.its1114aadcoursework1.dto.EmployeeDTO;
import lk.ijse.its1114aadcoursework1.entity.EmployeeEntity;
import lk.ijse.its1114aadcoursework1.service.EmployeeService;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepo employeeRepo;

    private final Mapping mapping;

    @Override
    public EmployeeDTO saveEmployee(EmployeeDTO employeeDTO) {
        return mapping.toEmployeeDTO(employeeRepo.save(mapping.toEmployee(employeeDTO)));
    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        return mapping.toEmployeeDTOList(employeeRepo.findAll());
    }

    @Override
    public EmployeeDTO getEmployeeByEmpCode(String empCode) {
        return mapping.toEmployeeDTO(employeeRepo.getEmployeeByEmpCode(empCode));
    }

    @Override
    public void updateEmployee(EmployeeDTO employeeDTO) {
        EmployeeEntity employee = employeeRepo.getEmployeeByEmpCode(employeeDTO.getEmpCode());
        employee.setEmpName(employeeDTO.getEmpName());
        employee.setProPic(employeeDTO.getProPic());
        employee.setGender(employeeDTO.getGender());
        employee.setStatus(employeeDTO.getStatus());
        employee.setDesignation(employeeDTO.getDesignation());
        employee.setAccessRole(employeeDTO.getAccessRole());
        employee.setDob(employeeDTO.getDob());
        employee.setDateOfJoin(employeeDTO.getDateOfJoin());
        employee.setAttBranch(employeeDTO.getAttBranch());
        employee.setAdd1(employeeDTO.getAdd1());
        employee.setAdd2(employeeDTO.getAdd2());
        employee.setAdd3(employeeDTO.getAdd3());
        employee.setAdd4(employeeDTO.getAdd4());
        employee.setAdd5(employeeDTO.getAdd5());
        employee.setContact(employeeDTO.getEmail());
        employee.setInfCaseOfEmerg(employeeDTO.getInfCaseOfEmerg());
        employee.setEmergContact(employeeDTO.getEmergContact());
        employeeRepo.save(employee);
    }

    @Override
    public void deleteEmployee(String empCode) {
        employeeRepo.deleteById(empCode);
    }

}
