c = []

d = []

for i in range(int(input())):
    t = input()
    b = float(input())
    c.append(b)
    d.append(t)

# 2 4 5 3 1 7 6

val = 9999

z = []

for i in range(len(c)):
    if(c[i] < val):
        pos = val
        val = c[i]
    elif c[i] < pos:
        pos = c[i]

for i in range(len(c)):
    if(pos == c[i]):
        z.append(i)
        
# print(d[z])

# print(pos)


x = []
for i in range(len(z)):
    x.append(d[i])
        
x.sort()

for i in range(len(x)):
    print(x[i])
        
