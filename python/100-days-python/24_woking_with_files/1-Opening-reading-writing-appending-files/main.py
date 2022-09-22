
# Overwrites code
with open("my_file.txt", mode='w') as file:
    file.write("""Toda vez que eu chego em casa 
a barata da vizinha ta na minha cama.
Eae fulano o que ce vai fazer?
""")

# Appends code mode='a' --> append
with open("my_file.txt", mode='a') as file:
    file.write("\nVou usar uma vara pra me defender.")

