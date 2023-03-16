a = []
b = int(input())

a = input().split(" ")

a = list(map(int, a))

cnt = 0

b = []

a.reverse()

# print(a)

for i in range(len(a)):
    print(a[i],end=" ")