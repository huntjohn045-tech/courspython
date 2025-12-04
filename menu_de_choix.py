print("1 : Addition")
print("2 : Soustraction")
print("3 : Multiplication")
print("4 : Division")

choix = int(input("Choisis une opération : "))

a = float(input("Premier nombre : "))
b = float(input("Deuxième nombre : "))

match choix:
    case 1:
        print("Résultat :", a + b)
    case 2:
        print("Résultat :", a - b)
    case 3:
        print("Résultat :", a * b)
    case 4:
        if b != 0:
            print("Résultat :", a / b)
        else:
            print("Erreur : division par zéro")
    case _:
        print("Choix invalide")
