package com.learningcourses.restapi.restapi1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CurrencyConfigController {

    @Autowired
    private CurrencyServiceConfig configuration;

    @RequestMapping("/currency-configuration") // to map url
    public CurrencyServiceConfig retrieveAllConfigs(){
        return configuration;
    }
    
}
