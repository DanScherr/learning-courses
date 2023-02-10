package com.learningcourses.spring.intro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

/** From Iteractions */
import com.learningcourses.spring.intro.game.GameRunner;
//import com.learningcourses.spring.intro.game.MarioGame;
//import com.learningcourses.spring.intro.game.MarioGameLoose;
//import com.learningcourses.spring.intro.game.PacmanGame;
//import com.learningcourses.spring.intro.game.SuperContraGame;

/** From example of multiple layer dependencies */
import com.learningcourses.spring.intro.enterpriseDependencyExample.MyWebController;


@SpringBootApplication
public class IntroApplication {

	public static void main(String[] args) {
		/* Itercation 1 - Tightly */
		//MarioGame game 	= new MarioGame(); // create an instance of a game
		//GameRunner runner = new GameRunner(game); // create an instance of a game runner
		//runner.run(); // the runner obj we'll call its method to run/provide
		// the mario game

		/* Iteraction 2 - Loose */
		//MarioGameLoose game 			= new MarioGameLoose();
		//SuperContraGame game 	= new SuperContraGame();
		//GameRunner runner 		= new GameRunner(game);
		//runner.run();

		/* Iteraction 3 */
		ConfigurableApplicationContext context 
			= SpringApplication.run(IntroApplication.class, args);
		GameRunner runner = context.getBean(GameRunner.class);
		runner.run();

		/** From example of multiple layer dependencies (enterpriseDependencyExample) */
		MyWebController controller = context.getBean(MyWebController.class);
		System.out.println(controller.returnValueFromBusinessService());

	}

}
