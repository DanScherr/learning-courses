# Pong game
***
### <ul><li>Description:</li></ul>
Pong game will be created with Python using PyCharm, POO and Turtle library
***
<ol>
    <h3><li>Create the screen</li></h3>
        <ul>
            <li>width = 800; height = 600</li>
        </ul>
    <h3><li>Create paddle</li></h3>
        <ol>
            <li>
                <ul>
                    <li>width = 20,</li>
                    <li>height = 100, (5 turtles -> 100/20)</li>
                    <li>x_pos = 350,</li>
                    <li>y_pos = 20.</li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>Be able to move up and down when player presses the arrows keys</li>
                    <li>Move space = 20</li>
                </ul>
            </li>
        </ol>
    <h3><li>Create another paddle</li></h3>
        <ul>
            <li>it'll be implemented a parameterization to build any paddle within Paddles class.</li>
        </ul>
    <h3><li>Create the ball and make it move</li></h3>
        <ul>
            <li>width = 20,</li>
            <li>height = 20, (5 turtles -> 100/20)</li>
            <li>x_pos = 0,</li>
            <li>y_pos = 0.</li>
        </ul>
    <h3><li>Detect collision with wall and bounce</li></h3>
        <ul>
            <li>Detect collision within the Y axis.</li>
        </ul>
    <h3><li>Detect collision with paddle</li></h3>
        <ul>
            <li>Detect collision within distance between ball and paddle and within X axis.  </li>
        </ul>
    <h3><li>Detect when paddle misses</li></h3>
        <ol>
            <li>Detect when the ball passes through paddle</li>
            <li>Reset the ball position to the center of the screen</li>
            <li>The ball should start then moving to the other player</li>
        </ol>
    <h3><li>Keep score</li></h3>
        <ol>
            <li>When detecting score, increase score</li>
            <li>When score reaches 10, end game</li>
            <li>Display winner</li>
        </ol>
</ol>
