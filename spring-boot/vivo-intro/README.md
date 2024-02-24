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

    - **Dependency Types** (from the best usage to worst):
        1. Constructor-based: set by creating the Bean using its Constructor
        2. Setter-based: set by calling setter methods on your beans
        3. Field: injected using reflection

    - Modules:
        - IoC Container
        - Testing (unity test)
        - Data Access
        - Web Servlet
        - Web Reactive
        - Integration
    

## :round_pushpin: Maven
- Configuration is on pom.xml
    - Group Id and Artifact Id

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
    - Let Spring manage dependencies by:
        - Adding @Component above the Classes statements and as a dependency of the classes
            - Component is a class managed by Spring
            - Dependency is something you need to, to run a specific class
        - Also, @Autowired on the dependencies of those classes
    - Spring manages them in the **Application Context**
    - **BEANS**: any instance of any object that Springs creates are called bean

- Understanding what's happening on the background
    1. Configure logs for debuging:
        1. resources/ application.properties
            - logging.level.org.springframework=debug