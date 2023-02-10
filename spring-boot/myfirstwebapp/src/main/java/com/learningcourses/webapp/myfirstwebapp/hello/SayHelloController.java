package com.learningcourses.webapp.myfirstwebapp.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class SayHelloController {

    // say-hello -> url instance
    @RequestMapping("say-hello")
    @ResponseBody
    public String sayHello() {
        return "Hello! What are you learning today?";
    }

    // say-hello -> url instance
    @RequestMapping("say-hello-html")
    @ResponseBody
    public String sayHelloHtml() {
        StringBuffer sb = new StringBuffer();
        sb.append("<html>");
        sb.append("<head>");
        sb.append("<title>First Web App</title>");
        sb.append("</head>");
        sb.append("<body>");
        sb.append("<h1>Welcome to my First Web App !!</h1>");
        sb.append("</body>");
        sb.append("</html>");
        sb.append("");
        return sb.toString();
    }
}
