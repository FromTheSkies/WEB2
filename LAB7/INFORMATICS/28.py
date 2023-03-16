a = []
b = int(input())

a = input().split(" ")

a = list(map(int, a))

# print(a)


for i in range(len(a)-1):
    if a[i+1] > 0 and a[i] > 0:
        print("YES")
        exit(0)
    elif a[i+1] < 0 and a[i] < 0:
        print("YES")
        exit(0)
print("NO")
        