package com.learningcourses.spring.intro.game;

public class SuperContraGame implements GamingConsole {
    
    /* Creating methods for the game */
    public void up() {
        System.out.println("SuperContraGame up"); //when user presses up the
        // Mario game prints 'up'
    }

    public void down() {
        System.out.println("SuperContraGame down"); //when user presses up the
        // Mario game prints 'down'
    }

    public void left() {
        System.out.println("SuperContraGame left"); //when user presses up the
        // Mario game prints 'left'
    }

    public void right() {
        System.out.println("SuperContraGame rigth"); //when user presses up the
    }
}