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
        