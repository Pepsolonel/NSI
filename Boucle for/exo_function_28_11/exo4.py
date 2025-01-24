def est_présent(chaîne,caractère):
    """
    Paramètres :
    chaîne : (str)
        Une chaîne de caractères
    caractère : (str)
        Le caractère dont on veut vérifier la présence dans la chaîne

    Résultat :
    (bool)
    Cette fonction renvoie True si le caractère est présent dans la chaîne et False si il ne l'est pas
    """
    for i in range(len(chaîne)):
        if chaîne[i]==caractère:
            return True
        else:
            pass
    return False

def indice(chaîne,caractère):
    """
    Paramètres :
    chaîne : (str)
        Une chaîne de caractère
    caractère : (str)
        Le caractère dont on cherche le premier indice dans la chaîne

    Résultat :
    (int)
    Cette fonction renvoie le premier indice dans la chaîne du caractère spécifié et -1 si il n'est pas présent dans la chaîne
    """
    for i in range(len(chaîne)):
        if chaîne[i]==caractère:
            return i+1
        else:
            pass
    return -1

def compte_caractère(chaîne,caractère):
    """
    Paramètres:
    chaîne : (str)
        Une chaîne de caractère
    caractère : (str)
        Le caractère dont on veut trouver le nombre de fois où il est présent dans la chaîne
    
    Résultat :
    (int)
    Cette fonction renvoie le nombre de fois ou le caractère est présent dans la chaîne
    """
    compteur=0
    for i in range(len(chaîne)):
        if chaîne[i]==caractère:
            compteur+=1
        else:
            pass
    return compteur