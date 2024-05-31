package lk.ijse.its1114aadcoursework1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
    // RestTemplate Configuration
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    // CORS Configuration
    @Bean
    public CORSConfig corsConfig() {
        return new CORSConfig();
    }
}