package lk.ijse.its1114aadcoursework1.service.impl;

import jakarta.transaction.Transactional;
import lk.ijse.its1114aadcoursework1.dao.AdminPanelRepo;
import lk.ijse.its1114aadcoursework1.dto.AdminPanelDTO;
import lk.ijse.its1114aadcoursework1.service.AdminPanelService;
import lk.ijse.its1114aadcoursework1.util.Mapping;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AdminPanelServiceImpl implements AdminPanelService {

    private final AdminPanelRepo adminPanelRepo;

    private final Mapping mapping;

    @Override
    public AdminPanelDTO saveAdminPanel(AdminPanelDTO adminPanelDTO) {
        return mapping.toAdminPanelDTO(adminPanelRepo.save(mapping.toAdminPanel(adminPanelDTO)));
    }

    @Override
    public List<AdminPanelDTO> getAllAdminPanel() {
        return mapping.toAdminPanelDTOList(adminPanelRepo.findAll());
    }
}
