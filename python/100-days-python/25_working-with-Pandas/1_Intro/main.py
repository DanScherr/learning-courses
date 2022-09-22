import pandas as pd

data = pd.read_csv("weather_data.csv", sep=";")

# data_dict = data.to_dict()
# print(data_dict)
#
# temp_list = data["temp"].to_list()
# print(temp_list)
#
# # getting data columns
# print(data["condition"])
# print(data.condition)

# # Getting an especific row
# print(data[data.day == "Monday"])
# print(data[data.temp == data["temp"].max()])

# # Particular column in row
# monday = data[data.day == "Monday"]
# print(monday.temp)
# print(data[data.day == "Monday"].temp)

# # Calculate an entire column
print(data.temp + 273)

