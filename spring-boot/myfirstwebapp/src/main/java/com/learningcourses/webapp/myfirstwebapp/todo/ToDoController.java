package com.learningcourses.webapp.myfirstwebapp.todo;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("name")
public class ToDoController {
    
    private ToDoService todoService; // instanciate an object of ToDoService Class

    public ToDoController(ToDoService todoService) {
        super();
        this.todoService = todoService; // when controller created, will set the give
        // ToDoService object to our instantieted one
    }

    // url/list-todos
    @RequestMapping("list-todos")
    public String listAllTodos(ModelMap model) {
        List<ToDo> todos = todoService.findByUsername("daniel");
        model.addAttribute("todos", todos);
        return "listTodos";
    }
}
