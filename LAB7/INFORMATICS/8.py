a = int(input())
b = int(input())


if a==b==1:
    print("YES")
elif a==1:
    if b!=1:
        print("NO")
elif b==1:
    if a!=1:
        print("NO")
else:
    print("YES")
    