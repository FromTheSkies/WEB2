import math

a = int(input())

if math.log(a, 2).is_integer()==True:
    print("YES")
else: print("NO")