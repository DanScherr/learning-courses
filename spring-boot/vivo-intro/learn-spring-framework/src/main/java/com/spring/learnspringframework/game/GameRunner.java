package com.spring.learnspringframework.game;

public class GameRunner {

    // Creating Member Variable
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
