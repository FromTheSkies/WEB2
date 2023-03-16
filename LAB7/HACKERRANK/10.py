t = input()
s = []
for i in range(len(t)):
    s.append(t[i])
a = input().split(" ")
s.insert(int(a[0]),a[1])

for i in range(len(s)):
    print(s[i],end="")
