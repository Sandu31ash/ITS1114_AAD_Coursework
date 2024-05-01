package lk.ijse.its1114aadcoursework1.dao;

import lk.ijse.its1114aadcoursework1.controller.Employee;
import lk.ijse.its1114aadcoursework1.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<EmployeeEntity, String> {
    EmployeeEntity getEmployeeByEmpCode(String empCode);
}
