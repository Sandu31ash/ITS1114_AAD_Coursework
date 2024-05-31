package lk.ijse.its1114aadcoursework1.service;

import lk.ijse.its1114aadcoursework1.secureAndResponse.response.JwtAuthResponse;
import lk.ijse.its1114aadcoursework1.secureAndResponse.secure.SignIn;
import lk.ijse.its1114aadcoursework1.secureAndResponse.secure.SignUp;

public interface AuthenticationService {
    JwtAuthResponse signUp(SignUp signup);
    JwtAuthResponse signIn(SignIn signIn);
    JwtAuthResponse refreshToken(String refreshToken);
}
