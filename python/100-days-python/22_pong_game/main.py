from turtle import Screen
from class_paddle import Paddle
from class_ball import Ball
from time import sleep
from class_scoreboard import Scoreboard

# TODO: 1. create the screen
screen = Screen()
screen.title("Pong game")
screen.bgcolor("black")
screen_width = 800
screen_height = 600
screen.setup(width=screen_width, height=screen_height)
# setting screen tracer = 0 so that it will not update until we call the update function in the loop we will create
screen.tracer(0)
screen.listen()
# TODO: 2. create and move a paddle
r_paddle = Paddle((350, 0))
screen.onkey(r_paddle.go_up, "Up")
screen.onkey(r_paddle.go_down, "Down")
# TODO: 3. create another paddle
l_paddle = Paddle((-350, 0))
screen.onkey(l_paddle.go_up, "w")
screen.onkey(l_paddle.go_down, "s")
# TODO: 4. create the ball and make it move
ball = Ball()
# TODO 8. create a scoreboard
scoreboard = Scoreboard()
# Start game in loop
game_is_on = True
while game_is_on:
    sleep(0.1)
    screen.update()
    ball.move()
    # TODO: 5. detect collision with wall and bounce
    if ball.ycor() > 280 or ball.ycor() < -280:
        ball.bounce_y()
    # TODO: 6. detect collision with paddle
    if (ball.distance(r_paddle) < 55 and ball.xcor() > 320) or (ball.distance(l_paddle) < 40 and ball.xcor() > -335):
        ball.bounce_x()
    # TODO: 7. detect when paddle misses
    # TODO: 8. keep score
    elif ball.distance(r_paddle) > 55 and ball.xcor() > 400:
        ball.reset_position()
        scoreboard.l_point()
    elif ball.distance(l_paddle) > 35 and ball.xcor() < -400:
        ball.reset_position()
        scoreboard.r_point()
    # End gaming
    if scoreboard.l_score == 10:
        scoreboard.l_wins()
        game_is_on = False
    elif scoreboard.r_score == 10:
        scoreboard.r_wins()
        game_is_on = False
# make the user close the game by clicking on the screen
screen.exitonclick()
