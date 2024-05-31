package lk.ijse.its1114aadcoursework1.service.impl;

import lk.ijse.its1114aadcoursework1.dao.UserDao;
import lk.ijse.its1114aadcoursework1.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceIMPL implements UserService {

    final private UserDao userDao;
    @Override
    public UserDetailsService userDetailsService() {
        return username ->
                userDao.findByEmail(username).
                orElseThrow(()->new UsernameNotFoundException("User Not Found"));
    }
}
