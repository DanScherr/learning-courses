import turtle
import pandas as pd

screen = turtle.Screen()
screen.title("U.S States Games")

# How to input a personalized new shape turtle (like a background image we want)
img = r'us-states-game-start\blank_states_img.gif'
screen.addshape(img)
turtle.shape(img)

# # How to get coordinates while clicking on screen
# def get_mouse_click_coor(x, y):
#     print(x, y)
#
#
# turtle.onscreenclick(get_mouse_click_coor)
#
# turtle.mainloop()

game_is_on = 0
while game_is_on < 50:
    answer_state = screen.textinput(title='Guess state', prompt='Whats another states name?')
    # TODO: Work the string
    answer_state = answer_state.lower().strip()
    answer_state = answer_state[:1].upper() + answer_state[1:]
    print(answer_state)
    # TODO: Check if name is on csv file
    df = pd.read_csv(r'us-states-game-start\50_states.csv')
    busca = df[df["state"] == answer_state]
    print(f'Valor buscado: {busca.state[1]}')
    print(f'Valor buscado: {busca["state"][1]}')
    print(f'Valor buscado: {busca.iloc[0, 0]}')
    print(f'Valor buscado: {busca.loc["0", "0"]}')
    # TODO: if it's, print on the screen on the coordinates to its respective guessed state and increase the title
    # TODO: if it isn't, pass.

screen.exitonclick()
