package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.CustomerRepo;
import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.entity.CustomerEntity;
import lk.ijse.its1114aadcoursework1.service.CustomerService;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepo customerRepo;

    private final Mapping mapping;

    @Override
    public CustomerDTO saveCustomer(CustomerDTO customerDTO) {
        //customerDTO.setCCode(UUID.randomUUID().toString());
        return mapping.toCustomerDTO(customerRepo.save(mapping.toCustomer(customerDTO)));
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return mapping.toCustomerDTOList(customerRepo.findAll());
    }

    @Override
    public CustomerDTO getCustomerByCusCode(String cusCode) {
        return mapping.toCustomerDTO(customerRepo.getCustomerByCusCode(cusCode));
    }

    @Override
    public void updateCustomer(CustomerDTO customerDTO) {
        CustomerEntity customer = customerRepo.getCustomerByCusCode(customerDTO.getCusCode());
        customer.setCusName(customerDTO.getCusName());
        customer.setGender(customerDTO.getGender());
        customer.setJoinedDate(customerDTO.getJoinedDate());
        customer.setLevel(customerDTO.getLevel());
        customer.setTotPoints(customerDTO.getTotPoints());
        customer.setDob(customerDTO.getDob());
        customer.setAdd1(customerDTO.getAdd1());
        customer.setAdd2(customerDTO.getAdd2());
        customer.setAdd3(customerDTO.getAdd3());
        customer.setAdd4(customerDTO.getAdd4());
        customer.setAdd5(customerDTO.getAdd5());
        customer.setContact(customerDTO.getContact());
        customer.setEmail(customerDTO.getEmail());
        customer.setRecPurData(customerDTO.getRecPurData());
        customerRepo.save(customer);
    }

    @Override
    public void deleteCustomer(String cusCode) {
        customerRepo.deleteById(cusCode);
    }

}
