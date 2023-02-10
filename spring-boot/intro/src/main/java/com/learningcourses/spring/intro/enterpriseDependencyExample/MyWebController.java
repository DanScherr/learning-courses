package com.learningcourses.spring.intro.enterpriseDependencyExample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.learningcourses.spring.intro.enterpriseDependencyExample.business.BusinessService;

@Component
public class MyWebController {
    
    @Autowired
    private BusinessService businessService;

    public long returnValueFromBusinessService() {
        return businessService.calculateSum();
    }
}
