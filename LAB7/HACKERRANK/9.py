a = []

for i in range(int(input())):
    t = input()
    if(t=="insert"):
        b = int(input())
        c = int(input())
        a.insert(b,c)
    elif(t=="remove"):
        b = int(input())
        a.remove(b)
    elif(t=="append"):
        b = int(input())
        a.append(b)
    elif(t=="sort"):
        a.sort()
    elif(t=="pop"):
        a.pop()
    elif(t=="reverse"):
        a.reverse()
    elif(t=="print"):
        print(a)
