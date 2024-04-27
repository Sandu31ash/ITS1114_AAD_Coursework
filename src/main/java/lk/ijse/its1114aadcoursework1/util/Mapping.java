package lk.ijse.its1114aadcoursework1.util;

import lk.ijse.its1114aadcoursework1.controller.Customer;
import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;
import lk.ijse.its1114aadcoursework1.dto.SalesDTO;
import lk.ijse.its1114aadcoursework1.dto.SupplierDTO;
import lk.ijse.its1114aadcoursework1.entity.CustomerEntity;
import lk.ijse.its1114aadcoursework1.entity.SalesEntity;
import lk.ijse.its1114aadcoursework1.entity.SupplierEntity;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class Mapping {
    private final ModelMapper mapper;

//    @Bean
//    public ModelMapper modelMapper() {
//        return new ModelMapper();
//    }

    public CustomerDTO toCustomerDTO(CustomerEntity customer) {
        return mapper.map(customer, CustomerDTO.class);
    }
    public CustomerEntity toCustomer(CustomerDTO customerDTO) {
        return mapper.map(customerDTO, CustomerEntity.class);
    }
    public List<CustomerDTO> toCustomerDTOList(List<CustomerEntity> customers) {
        return mapper.map(customers, List.class);
    }

    public SupplierDTO toSupplierDTO(SupplierEntity supplier) {
        return mapper.map(supplier, SupplierDTO.class);
    }
    public SupplierEntity toSupplier(SupplierDTO supplierDTO) {
        return mapper.map(supplierDTO, SupplierEntity.class);
    }
    public List<SupplierDTO> toSupplierDTOList(List<SupplierEntity> suppliers) {
        return mapper.map(suppliers, List.class);
    }

    public SalesDTO toSalesDTO(SalesEntity sales) {
        return mapper.map(sales, SalesDTO.class);
    }
    public SalesEntity toSales(SalesDTO salesDTO) {
        return mapper.map(salesDTO, SalesEntity.class);
    }
    public List<SalesDTO> toSalesDTOList(List<SalesEntity> sales) {
        return mapper.map(sales, List.class);
    }

    //UserMapping
//    public UserEntity toUserEntity(UserDTO userDTO){
//        return mapper.map(userDTO, UserEntity.class);
//    }

//    public UserDTO toUserDTO(UserEntity userEntity){
//        return mapper.map(userEntity, UserDTO.class);
//    }

}
