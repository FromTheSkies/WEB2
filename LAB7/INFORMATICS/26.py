a = []
b = int(input())

a = input().split(" ")

a = list(map(int, a))

# print(a)

cnt = 0
for i in range(len(a)):
    if a[i]>0:
        cnt+=1
print(cnt)