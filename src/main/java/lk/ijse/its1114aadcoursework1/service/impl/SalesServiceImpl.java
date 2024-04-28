package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.SalesRepo;
import lk.ijse.its1114aadcoursework1.dto.SalesDTO;
import lk.ijse.its1114aadcoursework1.service.SalesService;
import lombok.RequiredArgsConstructor;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SalesServiceImpl implements SalesService {

    private final SalesRepo salesRepo;

    private final Mapping mapping;

    @Override
    public SalesDTO saveSales(SalesDTO salesDTO) {
        return mapping.toSalesDTO(salesRepo.save(mapping.toSales(salesDTO)));
    }

    @Override
    public List<SalesDTO> getAllSales() {
        return mapping.toSalesDTOList(salesRepo.findAll());
    }
}
