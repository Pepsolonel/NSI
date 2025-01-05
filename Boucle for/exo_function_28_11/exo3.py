def enlève(texte,lettre):
    texte2=''
    for i in range(len(texte)):
        if texte[i]==lettre:
            pass
        else:
            texte2+=texte[i]
    return texte2