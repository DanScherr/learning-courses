import pandas
import pandas as pd

data = pd.read_csv('2018_Central_Park_Squirrel_Census_-_Squirrel_Data.csv')

grey_squirrels = len(data[data['Primary Fur Color'] == "Gray"])
red_squirrels = len(data[data['Primary Fur Color'] == "Cinnamon"])
black_squirrels = len(data[data['Primary Fur Color'] == "Black"])

print(f"grey: {grey_squirrels}\nred: {red_squirrels}\nblack: {black_squirrels}")

data_dict = {
    "Fur Color": ["Gray", "Cinnamon", "Black"],
    "Count": [grey_squirrels, red_squirrels, black_squirrels]
}

df = pandas.DataFrame(data_dict)
df.to_csv("squirrel_count.csv")
