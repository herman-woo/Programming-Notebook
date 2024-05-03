import numpy as num

numbers = [1,4,9,16,25,36,49,64,121]


def rooter(arr):
    print("Finding the square roots to numbers in an array")
    for item in arr:
        res = num.sqrt(item)
        print(res)


rooter(numbers)