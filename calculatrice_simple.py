A = float(input("Nombre A : "))
B = float(input("Nombre B : "))
op = input("Opérateur (+, -, *, /) : ")

if op == "+":
    print("Résultat :", A + B)

elif op == "-":
    print("Résultat :", A - B)

elif op == "*":
    print("Résultat :", A * B)

elif op == "/":
    if B == 0:
        print("Erreur : division par zéro impossible.")
    else:
        print("Résultat :", A / B)

else:
    print("Opérateur invalide.")
