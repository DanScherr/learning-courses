package com.spring.learnspringframework.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class GameRunner {

    // Creating Member Variable
    @Autowired
    private GamingConsole game;

    public GameRunner(GamingConsole game) {
        // Assigning game parameter to member variable
        this.game = game;
    }

    public void run() {
        game.up();
        game.down();
        game.left();
        game.right();    
    }

}
