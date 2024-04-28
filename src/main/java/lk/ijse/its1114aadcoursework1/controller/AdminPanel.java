package lk.ijse.its1114aadcoursework1.controller;

import lk.ijse.its1114aadcoursework1.dto.AdminPanelDTO;
import lk.ijse.its1114aadcoursework1.service.AdminPanelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/adminpanel")
@RequiredArgsConstructor
public class AdminPanel {

    private final AdminPanelService adminPanelService;

    @GetMapping("/health")
    public String healthCheck(){
        return "Admin Panel Health OK";
    }

    @PostMapping("/save")
    public AdminPanelDTO saveAdminPanel(@RequestBody AdminPanelDTO adminPanelDTO){
        return adminPanelService.saveAdminPanel(adminPanelDTO);
    }

    @GetMapping("/get")
    public List<AdminPanelDTO> getAllAdminPanel(){
        return adminPanelService.getAllAdminPanel();
    }

}
