package com.learningcourses.restapi.restapi1;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CourseControl {

    /*  /courses
        return: id, name, author

        http://localhost:8080/courses [
            {
                "id": 1,
                "name": "Learn AWS",
                "author": "in28minutes"
            }
        ]
    */

    @RequestMapping("/courses") // to map url
    public List<Course> retrieveAllCourses(){
        return Arrays.asList( // create an array of Course Class's string objects representation
            new Course(1, "Learn Aws", "in28minutes"),
            new Course(2, "Learn DevOps", "in28minutes"),
            new Course(3, "Learn Sockets", "in28minutes")
        );
    }
    
}
