package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.SalesRepo;
import lk.ijse.its1114aadcoursework1.dto.SalesDTO;
import lk.ijse.its1114aadcoursework1.entity.SalesEntity;
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

    @Override
    public SalesDTO getSalesByOrderNo(String orderNo) {
        return mapping.toSalesDTO(salesRepo.getSalesByOrderNo(orderNo));
    }

    @Override
    public void updateSales(SalesDTO salesDTO) {
        SalesEntity sales = salesRepo.getSalesByOrderNo(salesDTO.getOrderNo());
        sales.setCusName(salesDTO.getCusName());
        sales.setItemCode(salesDTO.getItemCode());
        sales.setItemDesc(salesDTO.getItemDesc());
        sales.setSize(salesDTO.getSize());
        sales.setUnitPrice(salesDTO.getUnitPrice());
        sales.setItemQty(salesDTO.getItemQty());
        sales.setTotPrice(salesDTO.getTotPrice());
        sales.setPurDate(salesDTO.getPurDate());
        sales.setPayMethod(salesDTO.getPayMethod());
        sales.setAddedPoints(salesDTO.getAddedPoints());
        sales.setCashierName(salesDTO.getCashierName());
        salesRepo.save(sales);
    }

    @Override
    public void deleteSales(String orderNo) {
        salesRepo.deleteById(orderNo);
    }
}
