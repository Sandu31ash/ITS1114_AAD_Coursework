package lk.ijse.its1114aadcoursework1;

import lk.ijse.its1114aadcoursework1.controller.Customer;
import lk.ijse.its1114aadcoursework1.dao.CustomerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class Its1114AadCoursework1Application{

    @Bean
    ModelMapper modelMapper(){
        return new ModelMapper();
    }

    public static void main(String[] args) {
        SpringApplication.run(Its1114AadCoursework1Application.class, args);
    }

//    @Autowired
//    private CustomerRepo customerRepo;
//
//
//    @Override
//    public void run(String... args) throws Exception {
//        Customer customer = new Customer();
//        customer.setCustomerId()
//    }
}
