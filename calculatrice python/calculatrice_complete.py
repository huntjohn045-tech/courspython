
print("=== CALCULATRICE PYTHON (version améliorée) ===")
print("Exemple d'entrée : 12+7*3")
print("Touches : +  -  *  /  %  C  Q  =")

expression = ""
resultat = 0

while True:
    print("\nExpression actuelle :", expression if expression else "0")
    touche = input("Entre une expression, un opérateur, ou une commande : ")

    if touche.lower() == "q":
        print("Calculatrice fermée.")
        break

    if touche.upper() == "C":
        expression = ""
        continue

    if touche == "=":
        try:
            if "%" in expression:
                expression = expression.replace("%", "/100")
            resultat = eval(expression)
            print("Résultat =", resultat)
            expression = str(resultat)
        except:
            print("Erreur !")
            expression = ""
        continue

    if expression == "" and touche in "+-*/%":
        expression = str(resultat) + touche
        continue

    expression += touche
