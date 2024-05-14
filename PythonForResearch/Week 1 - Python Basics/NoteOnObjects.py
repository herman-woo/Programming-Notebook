import copy
import string
alphabet = string.ascii_letters
print(alphabet)

x = [1,[2]]
y = copy.copy(x)
z = copy.deepcopy(x)
y is z




n = 3

if n%2 == 0:
    print("even")
else:
    print("odd")

for x in range(10):
    print(x)

names = ["Herman","woo","Anthony","Megan","Markle"]

for name in names:
    print(name)

bears = {"Grizzly":"angry", "Brown":"friendly", "Polar":"friendly"}
for bear in bears:
    if bears[bear] == "friendly":
        print("Hello, "+bear+" bear!")
else:
    print("odd")

m = 100
is_prime = True
for i in range(2,m):
    if m%i == 0:
        is_prime = False
        break
print(is_prime)


l=100
number_of_times = 0
while l >= 1:
    l //= 2
    number_of_times += 1
print(number_of_times)