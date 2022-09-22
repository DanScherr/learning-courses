#Lista 2 // 2nd list

#  1 -
def mediaNotas(matricula, media_final):
    while matricula != 999:
        matricula = int(input('Forneça sua matricula:'))
        nota1 = float(input('Digite sua primeira nota:'))
        nota2 = float(input('Digite sua segunda nota:'))
        nota3 = float(input('Digite sua terceira nota:'))
        media_final = (2 * nota1 + 3 * nota2 + 4 * nota3) / 9
        if media_final >= 7:
            print('Aprovado, %i, %.2f' % (matricula, media_final))
        else:
            print('Reprovado, %i, %.2f' % (matricula, media_final))

#  2 -
def divisaoSubtracao(x, y):
    cont = 0
    s = 0

    while True:
        s += y
        if s > x:
            break
        cont += 1
    return cont

#  3 -
def alpha():
    n = 50
    a = 0

    for i in range(1, n + 1):
        a += ((2 ** i) / n)
        n -= 1
    return a

#  4 -
def pi():
    n = int(input("Forneça um número ímpar e maior que 0: "))
    inversor = 1
    s = 0

    while True:
        if (n % 2) == 0 or n < 0:
            break

        else:
            for i in range(1, n + 1, 2):
                s += 4 / i * inversor
                inversor *= (-1)
            break

    if s == 0:
        print("\n- Número fornecido não é impar ou maior que 0.")
    else:
        print(f"\n- Número pi é igual a: {s}")

#  5 -
def cosseno(n, x):
    inversor = 1
    cos = 1
    fat = 1

    for i in range(2, n):
        fat = fat * i
        if i % 2 == 0:
            inversor *= (-1)
            cos += (((x ** i) / fat) * inversor)

    print(f"\n>> {cos}")

#  6 -
def multiplos_entre_numeros(i, j, n):
    m1 = 0
    m2 = 0

    for t in range(1, n + 1):
        m1 = i * t
        m2 = j * t

        if m1 < m2 and m1 != m2:
            print(m1)

        else:
            print(m2)

#  7 -
def numerosAdjacentes(n):
    ant = n % 10
    atual = 0

    while n > 0:
        n = n // 10
        atual = n % 10
        if (ant == atual):
            break
        else:
            ant = atual

#  8 -
def decimeal_binario(n):
    resto = 0
    cont = 0
    binario = 0

    while n>0:
        n = n // 2
        resto = n % 2
        binario += (resto * (10 ** i))
        cont += 1
        if n == 0:
            break

    return binario


