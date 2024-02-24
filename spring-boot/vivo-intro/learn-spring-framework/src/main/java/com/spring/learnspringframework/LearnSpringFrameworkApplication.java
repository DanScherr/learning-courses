package com.spring.learnspringframework;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.spring.learnspringframework.game.GameRunner;
// import com.spring.learnspringframework.game.MarioGame;
// import com.spring.learnspringframework.game.PackmanGame;
// import com.spring.learnspringframework.game.SuperContraGame;

@SpringBootApplication
public class LearnSpringFrameworkApplication {

	public static void main(String[] args) {

		// Creating Spring Context
		ConfigurableApplicationContext context 
			= SpringApplication.run(LearnSpringFrameworkApplication.class, args);
		
		// Creating Games Objects
		// MarioGame marioGame = new MarioGame();
		// SuperContraGame superContraGame = new SuperContraGame();
		// PackmanGame packmanGame = new PackmanGame();

		// Creating Game Runner to run some game
		// GameRunner runner = new GameRunner(superContraGame);

		// Running logic with Spring
		GameRunner runner = context.getBean(GameRunner.class);

		// Running the game
		runner.run();
	}
}
