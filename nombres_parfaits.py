nombre = int(input("Entrez un nombre : "))
somme_diviseurs = 0
for i in range(1, nombre):
    if nombre % i == 0:
        somme_diviseurs += i
if somme_diviseurs == nombre:
    print(f"{nombre} est un nombre parfait !")
else:
    print(f"{nombre} n'est pas un nombre parfait.")
