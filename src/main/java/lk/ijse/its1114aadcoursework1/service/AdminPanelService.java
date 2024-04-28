package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.dto.AdminPanelDTO;
import lk.ijse.its1114aadcoursework1.dto.CustomerDTO;

import java.util.List;

public interface AdminPanelService {

    AdminPanelDTO saveAdminPanel(AdminPanelDTO adminPanelDTO);
    List<AdminPanelDTO> getAllAdminPanel();
//    AdminPanelDTO getSelectedAdminPanel(Date date);
//    void deleteAdminPanel(Date date);
//    void updateAdminPanel(Date date, AdminPanelDTO adminPanelDTO);
}
