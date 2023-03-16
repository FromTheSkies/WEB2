val = int(input())

if(val%4==0):
    if(val%100==0):
        if(val%400==0):
            print("YES")
        else: print("NO")
    else: print("YES")
else: print("NO")