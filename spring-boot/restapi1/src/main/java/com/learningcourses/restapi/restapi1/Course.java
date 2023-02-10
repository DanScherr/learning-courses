package com.learningcourses.restapi.restapi1;

public class Course {

    // def vars: data fields
    private long id;
    private String name;
    private String auth;

    // constructor
    public Course(int id, String name, String auth) {
        super();
        this.id     = id;
        this.name   = name;
        this.auth   = auth;
    }

    // getters
    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuth() {
        return auth;
    }

    // toString
    @Override
    public String toString() { // overriding toString String's method of a object String representation
        return "Course [id=" + this.getId() + ", name=" + this.getName() + ", author=" + this.getAuth() + "]";
    }

}

