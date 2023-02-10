package com.learningcourses.spring.intro.game;

import org.springframework.stereotype.Component;

@Component
public class PacmanGame implements GamingConsole {
    
    /* Creating methods for the game */
    public void up() {
        System.out.println("PacmanGame up"); //when user presses up the
        // Mario game prints 'up'
    }

    public void down() {
        System.out.println("PacmanGame down"); //when user presses up the
        // Mario game prints 'down'
    }

    public void left() {
        System.out.println("PacmanGame left"); //when user presses up the
        // Mario game prints 'left'
    }

    public void right() {
        System.out.println("PacmanGame rigth"); //when user presses up the
        // Mario game prints 'right'
    }
}