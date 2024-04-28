package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.EmployeeRepo;
import lk.ijse.its1114aadcoursework1.dto.EmployeeDTO;
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
}
