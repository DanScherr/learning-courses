package com.learningcourses.spring.intro.game;

import org.springframework.stereotype.Component;

@Component
public interface GamingConsole {
    //methods
    void up();
    void down();
    void left();
    void right();
}
