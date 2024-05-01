package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.SupplierRepo;
import lk.ijse.its1114aadcoursework1.dto.SupplierDTO;
import lk.ijse.its1114aadcoursework1.entity.SupplierEntity;
import lk.ijse.its1114aadcoursework1.service.SupplierService;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SupplierServiceImpl implements SupplierService {

    private final SupplierRepo supplierRepo;

    private final Mapping mapping;

    @Override
    public SupplierDTO saveSupplier(SupplierDTO supplierDTO) {
//        supplierDTO.setSCode(UUID.randomUUID().toString());
        return mapping.toSupplierDTO(supplierRepo.save(mapping.toSupplier(supplierDTO)));
    }

    @Override
    public List<SupplierDTO> getAllSupplier() {
        return mapping.toSupplierDTOList(supplierRepo.findAll());
    }

    @Override
    public SupplierDTO getSupplierBySupCode(String supCode) {
        return mapping.toSupplierDTO(supplierRepo.getSupplierBySupCode(supCode));
    }

    @Override
    public void updateSupplier(SupplierDTO supplierDTO) {
        SupplierEntity supplier = supplierRepo.getSupplierBySupCode(supplierDTO.getSupCode());
        supplier.setSupName(supplierDTO.getSupName());
        supplier.setCategory(supplierDTO.getCategory());
        supplier.setAdd1(supplierDTO.getAdd1());
        supplier.setAdd2(supplierDTO.getAdd2());
        supplier.setAdd3(supplierDTO.getAdd3());
        supplier.setAdd4(supplierDTO.getAdd4());
        supplier.setAdd5(supplierDTO.getAdd5());
        supplier.setAdd6(supplierDTO.getAdd6());
        supplier.setContact1(supplierDTO.getContact1());
        supplier.setContact2(supplierDTO.getContact2());
        supplier.setEmail(supplierDTO.getEmail());
        supplierRepo.save(supplier);
    }

    @Override
    public void deleteSupplier(String supCode) {
        supplierRepo.deleteById(supCode);
    }

}
