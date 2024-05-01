package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    List<CustomerDTO> getAllCustomer();
    CustomerDTO getCustomerByCusCode(String cusCode);
    void updateCustomer(CustomerDTO customerDTO);
    void deleteCustomer(String customerCode);
}
