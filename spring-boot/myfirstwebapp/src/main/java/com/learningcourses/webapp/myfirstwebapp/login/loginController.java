package com.learningcourses.webapp.myfirstwebapp.login;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes("name")
public class loginController {
    // logger for debuging
    //private Logger logger = LoggerFactory.getLogger(getClass());
    
    private AuthenticationService authenticationService;
        //= new AuthenticationService(); // instead of contructing it on 
        //here we'll construct it with contructor injectio

    
    public loginController(AuthenticationService authenticationService){
        super();
        this.authenticationService = authenticationService;
    }
    
    // GET login
    @RequestMapping(value="login", method = RequestMethod.GET)
    public String gotoLoginPage() {
        return "login";
    }

    // POST login?name={name}, RequestParam
    @RequestMapping(value="login", method = RequestMethod.POST)
    public String gotoWelcomePage(  @RequestParam String name,
                                    @RequestParam String password,
                                    ModelMap model) {
        //authentication logic                                
        if (authenticationService.authenticate(name, password)){
            model.put("name", name);
            //model.put("password", password); // not secure
            return "welcome";
        }
        model.put("errorMessage", "Invalid Credentials! Please try again.");
        return "login";
    }
}
