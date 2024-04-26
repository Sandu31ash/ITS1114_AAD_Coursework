package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.SupplierRepo;
import lk.ijse.its1114aadcoursework1.dto.SupplierDTO;
import lk.ijse.its1114aadcoursework1.service.SupplierService;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
@RequiredArgsConstructor
public class SupplierServiceImpl implements SupplierService {

    private final SupplierRepo supplierRepo;

    private final Mapping mapping;

    @Override
    public SupplierDTO saveSupplier(SupplierDTO supplierDTO) {
        supplierDTO.setSCode(UUID.randomUUID().toString());
        return mapping.toSupplierDTO(supplierRepo.save(mapping.toSupplier(supplierDTO)));
    }

    @Override
    public List<SupplierDTO> getAllSupplier() {
        return null;
    }

}
