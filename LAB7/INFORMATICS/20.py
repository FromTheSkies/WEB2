import math
a = int(input())

i = 1
while i < a + 1:
    if i%2==0 and math.isqrt(i)**2 == i:
        print(i," ")
    i+=1