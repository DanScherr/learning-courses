with open("./Input/Letters/starting_letter.txt", mode='r') as starting_letter, \
    open("./Input/Names/invited_names.txt", mode='r') as invited_names:
    letter = starting_letter.readlines()
    names = invited_names.readlines()

name_in_letter = letter[0][5:9]

print(f'Original: {letter}\n\n')

for i in names:
    letter_name = i.replace('\n', '')
    letter[0] = letter[0].replace(letter[0][5:], letter_name + ',\n')
    print(f'{letter}; {letter_name}')
    aux_name = i
    with open(f'./Output/ReadyToSend/{letter_name}_letter.txt', mode='w') as written_letter:
        written_letter.write(''.join(letter))

print(letter)
