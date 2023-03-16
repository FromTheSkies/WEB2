a = []
b = int(input())

a = input().split(" ")

a = list(map(int, a))

# print(a)

cnt = 0
for i in range(len(a)-1):
    if a[i+1] > a[i]:
        cnt+=1
print(cnt)
        