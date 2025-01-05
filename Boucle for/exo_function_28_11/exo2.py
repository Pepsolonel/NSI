def répéter_lettre_liste(mot,list):
    nouveau_texte=''
    for i in range(len(mot)):
        nouveau_texte+=mot[i]*list[i]
    return nouveau_texte