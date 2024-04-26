package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    List<CustomerDTO> getAllCustomer();
//    CustomerDTO getSelectedCustomer(String cCode);
//    void deleteCustomer(String cCode);
//    void updateCustomer(String cCode, CustomerDTO customerDTO);
}
