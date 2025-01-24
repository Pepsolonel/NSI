n=int(input('Saisir un nombre entier'))
b=0
for i in range(n):
    if (i+1)%2==0:
        a=0
    else:
        a=i+1
    b+=a
print(b)