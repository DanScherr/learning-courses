package com.learningcourses.webapp.myfirstwebapp.todo;

import java.time.LocalDate;

//Database (MySQL)
    // 1 - Static List of todos
    // 2 - Database (H2, MySQL)

public class ToDo {

    public ToDo(int id, String username, String description, LocalDate targetDate, boolean done){
        super();
        this.id             = id;
        this.description    = description;
        this.targetDate     = targetDate;
        this.done           = done;
    }

    /* mapped attributs:
     * id
     * username
     * description
     * targetData
     * done
    */
    private int id;
    private String username;
    private String description;
    private LocalDate targetDate;
    private boolean done;

    /* Getters & Setters */
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public LocalDate getTargetDate() {
        return targetDate;
    }
    public void setTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
    }
    public boolean isDone() {
        return done;
    }
    public void setDone(boolean done) {
        this.done = done;
    }

    /* ToSting formatting */
    @Override
    public String toString() {
        return "ToDo [id=" + id + ", username=" + username + ", description=" + description + ", targetDate="
                + targetDate + ", done=" + done + "]";
    }

    /* ToSting formatting */
    
}
