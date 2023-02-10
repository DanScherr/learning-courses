package com.learningcourses.spring.intro.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GameRunner {

    //defynning variables
    @Autowired
    private GamingConsole game;
    
    //constructor
    public GameRunner(GamingConsole game) {
        this.game = game;
    }

    //methods
    public void run() {
        game.up();
        game.down();
        game.left();
        game.right();
    }
}
