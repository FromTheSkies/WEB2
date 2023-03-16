a = []
b = int(input())

a = input().split(" ")

# print(a)


for i in range(len(a)):
    if i%2==0:
        print(a[i],end=" ")