package lk.ijse.its1114aadcoursework1.dao;

import lk.ijse.its1114aadcoursework1.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<CustomerEntity, String> {
    CustomerEntity getCustomerByCusCode(String cusCode);
}
