package lk.ijse.its1114aadcoursework1.conversion;

import lk.ijse.its1114aadcoursework1.dto.UserDTO;
import lk.ijse.its1114aadcoursework1.entity.UserEntity;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ConversionData {
    final private ModelMapper modelMapper;
    public UserEntity toUserEntity(UserDTO userDTO){
        return modelMapper.map(userDTO, UserEntity.class);
    }

    public UserDTO toUserDTO(UserEntity userEntity){
        return modelMapper.map(userEntity, UserDTO.class);
    }
}
