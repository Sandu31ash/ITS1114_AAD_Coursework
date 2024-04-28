package lk.ijse.its1114aadcoursework1.util;

import lk.ijse.its1114aadcoursework1.controller.Customer;
import lk.ijse.its1114aadcoursework1.dto.*;
import lk.ijse.its1114aadcoursework1.entity.*;
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

    public EmployeeDTO toEmployeeDTO(EmployeeEntity employee) {
        return mapper.map(employee, EmployeeDTO.class);
    }
    public EmployeeEntity toEmployee(EmployeeDTO employeeDTO) {
        return mapper.map(employeeDTO, EmployeeEntity.class);
    }
    public List<EmployeeDTO> toEmployeeDTOList(List<EmployeeEntity> employee) {return mapper.map(employee, List.class);
    }

    public InventoryDTO toInventoryDTO(InventoryEntity inventory) {
        return mapper.map(inventory, InventoryDTO.class);
    }
    public InventoryEntity toInventory(InventoryDTO inventoryDTO) {return mapper.map(inventoryDTO, InventoryEntity.class);}
    public List<InventoryDTO> toInventoryDTOList(List<InventoryEntity> inventory) {return mapper.map(inventory, List.class);}


    public AdminPanelDTO toAdminPanelDTO(AdminPanelEntity adminPanel) {return mapper.map(adminPanel, AdminPanelDTO.class);}
    public AdminPanelEntity toAdminPanel(AdminPanelDTO adminPanelDTO) {return mapper.map(adminPanelDTO, AdminPanelEntity.class);}
    public List<AdminPanelDTO> toAdminPanelDTOList(List<AdminPanelEntity> adminPanel) {return mapper.map(adminPanel, List.class);}


    public UserDTO toUserDTO(UserEntity user) {return mapper.map(user, UserDTO.class);}
    public UserEntity toUser(UserDTO userDTO) {return mapper.map(userDTO, UserEntity.class);}
    public List<UserDTO> toUserDTOList(List<UserEntity> user) {return mapper.map(user, List.class);}


    //UserMapping
//    public UserEntity toUserEntity(UserDTO userDTO){
//        return mapper.map(userDTO, UserEntity.class);
//    }

//    public UserDTO toUserDTO(UserEntity userEntity){
//        return mapper.map(userEntity, UserDTO.class);
//    }

}
