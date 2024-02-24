# Spring boot study to work on Telefonica :purple_heart::mechanical_arm:

## :pushpin: Sumary:

- [Terminology](#round_pushpin-terminology)
- [Intro to Spring Framework](#round_pushpin-intro-to-spring-framework)

## 	:round_pushpin: Terminology:

- Tight Coupling and Loose Coupling
- IOC Container
- Application Context
- Component Scan
- Dependency Injection
- Spring Beans
- Auto Wiring

## :round_pushpin: Intro to Spring Framework:

- It'll be created a Game Runner:
    1. Tightly Coupled
        - Game Runner Class
        - Game Classes: Mario, Super Contra, PacMan...
    2. Loose Coupling - **Interfaces**
        - GameRunner Class
        - GamingConsole interface
            - Game classes: Mario, Super Contra, PacMan...
    3. Loose Coupling - **Spring**:
        - Spring framework will manage all our objects
        - GameRunner Class
        - GamingConsole interface
            - Game classes: Mario, Super Contra, PacMan...

## Project:

1. Iteration - Tightly Coupled:
    - Starting a Spring Project at [spring-initializr](https://start.spring.io/):
        - Maven
        - Java
        - Spring Boot 3.0.0 (M1)
        - Group: com.spring
        - Artifact: learn-spring-framework
        - Jar
        - Java 17
    - Structure:
        - Other classes should be created on subpackages separated by a dot "."
    - Create Game Runner and Mario Game Classes

2. Iteraction - Loosed Coupling:
    - Create Super Contra Game
    - Change Game Runner class 
        - because it's tightly coupled to the game we're running (means that we have to make change in the code to run another game)
    - Create an interface - **GamingConsole**
    - Implement interface on games
    - Use interface on GameRunner instead of specific game
        - It doesnt care anymore if it's a SuperContra or Mario game
    
3. Iteraction - Another lvl of Loosed Coupling
