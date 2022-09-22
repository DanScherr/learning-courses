#Lista 3 // 3rd list

#  1 -
n=int(input("Forneça um número natural: "))
s=0

for x in range (1,7):
    s=(x)*(x+1)*(x+2)
    if s==n:
        print(f"\n- {n} é um número triangular.")
        break
    elif s>n:
        print(f"\n- {n} não é um número triangular.")
        break

#  2 -
n=int(input("Forneça um número natural: "))
H=0

for k in range (1,n+1):
    H+=(1/k)
print(H)

#  3 -
n=int(input("Forneça n: "))
s=0

for i in range (1,n+1):
    s+=i
    print(s,", ", end="")
print("FIM.")

#  4 -
c = input('Mi de um caractere:')
while c != "." :
    print(c)
    c = input('Mi de outro caractere, veinho:')

#  5 -
n=int(input("Forneça n: "))
s=0
inversor=1

for i in range (1,n+1):
    s+=(1/i)*inversor
    inversor*=(-1)
print(f"{s:.4f}")

#  6 -
n=int(input("Insira tamanho da sequência: "))
print()
i=1
post=0
ant=0
a=0

for t in range (1,n+1):
    x=int(input(f"Insira o {t}º número: "))
    post=x
    if ant==post:
        i+=1
    elif ant!=post and i>a:
        a=i
        i=1
    ant=x

if a>i and a!=1:
    print(f"\n- O tamanho da maior subsequência é: {a}.")
elif i>a and i!=1:
    print(f"\n- O tamanho da maior subsequência é: {i}.")
else:
    print("\n- Não existe subsequência.")

#  7 -
hip=int(input("Foneça o valor da hipotenusa: "))
l1=int(input("Forneça o valor de um dos lados: "))
l2=int(input("Forneça o valor do outro lado: "))

if (hip**2)==(l1**2)+(l2**2):
    print(f"\n- {hip}, {l1} e {l2} formam um triangulo retângulo.")
else:
    print(f"\n- {hip}, {l1} e {l2} não formam um triangulo retângulo.")

#  8 -
print("Número primo é todo aquele divisivel por 1 e ele mesmo.")
n = int(input("\nForneça um número: "))
s = 0

if n > 2:
    if n % 2 == 0:
        print(f"\n- Número {n} não é primo.")

    else:
        for i in range(3, n, 2):
            s = n % i
            if s == 0:
                print(f"\n- Número {n} não é primo.")
                break
        if s != 0:
            print(f"\n- Número {n} é primo.")

elif n > 0 and n <= 2:
    print(f"\n- Número {n} é primo.")
else:
    print(f"\n- Número {n} não natural.")

#  9 -
n=int(input("Forneça N: "))
ant=0
post=0
s=n

while True:
    ant=s%10
    s=s//10
    if s==0:
        print(f"\n- O número {n} é composto por dígitos em ordem crescente.")
        break
    post=s%10
    if ant!=(post+1):
        print(f"\n- O número {n} não é composto por dígitos em ordem crescente.")
        break

#  10 -
n=int(input("Forneça um número em binário: "))
n1=n
resto=0
s=0

for i in range (0,n):
    s+=(n1%10)*(2**i)
    n1=n1//10
    if n1==0:
        break
print(f"\n{n} (binário) --> {s} (decimal)")

