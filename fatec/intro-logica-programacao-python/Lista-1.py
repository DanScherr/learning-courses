# Lista 1  //  1st List

#  1 - Given two numbers, print the biggest
def maior_de_dois(a,b):
    iguais = (a==b)
    maior = (a>b)

    if (iguais):
        return "Os números digitados são iguais."
    elif (maior):
        return a
    else:
        return b


#  2 - Given 2 numbers, check if they are diferent. If they are, print the biggest and the lowest.
def checarDiferenca_maior_menor(a,b):
    diferentes = (a!=b)
    maior = (a>b)
    if (diferentes):
        if (maior):
            return "{0} é maior que {1}" .format(a,b)
        else:
            return "{1} é maior que {0}" .format(a,b)
    else:
        return "Os números digitados são iguais."


#  3 - Print the integer number from 1 to 10
def contagem10():
    for i in range(1,10+1):
        print (i)


#  4 - Given a lista, sum the numbers
def somaLista():
    N = 0
    soma = 0

    while True:
        N = int(input("Insira um número para somar ou 0 para sair: "))
        soma += N
        sair = (N == 0)
        if (sair):
            return soma
            break


#  5 - Print a arithmetic progression
def progressaoAritmetica(a,b,r):
    maior = (a > b)
    menor = (a < b)
    if maior:
        for i in range (b, a, r):
            print (i)
    elif menor:
        for i in range (a, b, r):
            print (i)
    else:
        print ("Os números digitados são iguais.")


#  6 - Divide a number by 2 until it's bigger then 0
def dividePor2(quociente):
    contador = 0

    while quociente>0:
        quociente = quociente/2
        contador += 1
    return contador


#  7 - Given a list of number, print de arithmetic avarege
def mediaAritmetica():
    soma = 0
    contador = 0
    while True:
        N=float(input("Digite um número para se tirar a média aritmética ou 99.99 para sair: "))
        if N == 99.99:
            break
        else:
            contador +=1
            soma += N

    return (soma/contador)


#  8 - Given an integer number, print the biggest square root number smaller then the given number
def maiorQuadrado(N):
    quadrado = 0
    for i in range (1, N+1):
        quadrado = (i*i) + i
        if quadrado >= N:
            return i * i


#  9 - Ask the user to type letters until he types "Z" to stop and then print how many letter where typed
def qntsLetras():
    Letra = 0
    cont = 0

    while True:
        Letra = input ("Digite uma letra ou Z para sair: ")
        if Letra == "Z":
            return cont
        cont += 1


#  10 - Ask the user to type letters until he types "Z" to stop and then print how many vogals where typed
def qntsVogais():
    Letra = 0
    cont = 0

    while True:
        Letra = input("Digite uma letra ou Z para sair: ")
        if Letra == "Z":
            return cont
        elif Letra == "a" or Letra == "e" or Letra == "i" or Letra == "o" or Letra == "u":
            cont += 1
