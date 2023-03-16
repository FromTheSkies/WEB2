import math
a = int(input())

i = 1

while i < a + 1:
    if math.log(i, 2).is_integer()==True:
        print(i,end=" ")
    
    # if math.isqrt(i)**2 == i:
    #     print(i)
    i+=1