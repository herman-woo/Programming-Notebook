## Week 1 overview
import numpy as num
import copy

# Basic Variable declarations
x = 2
y = 3

# Mutable Object
arr1 = [1,2,3,4,5]
dict = {'key1': 'value1',
        'key2': 2}
print(dict.get("key2"))
dict['key3'] = True
print(dict.get("key3"))
print("array 1: ", arr1, " Map 1: ",dict)

# Immutable objects
name = "Herman"
dob = (1993,2,25)


numTuple = (1,2,3,4)
sumOfTuple = sum(numTuple)
print("Tuple: ", numTuple, " Sums up to: ",sumOfTuple)


print("Week 1 Overview:",
  num.sqrt(25)
)


# Dynamic Typing
'''
This is something new to me so i want to note this down,
'''
L1 = [1,2,3]
L2 = L1

'''
L2 is not a new copy of L1. the array [1,2,3] is stored as an object
L1 is stored as a variable name, and then there is a reference from L1 to the array
Since variable names cannot be reference, L2 does not reference L1 but instead the array that L1 references
'''
L1[0] = 21

'''
This sets the array to [21,2,3]

So therefore, L2[0] now also = 21 because L2 points to the same thing L1
and therefore if you use the 'is' keyword L2 and L1 would return True'''
print(L2[0], L2 is L1)

'''
Meanwhile, just strickly creating 2 variables with the same values in the array does not create identical objects.
'''
M = [10,20,30]
N = [10,20,30]
print(M == N, M is N)


'''
If we were to create a deep copy of L1 using the copy module, that would also create a new object with the same values
'''
L3 = copy.deepcopy(L1)
print("L3",L3)
print(L1 == L3, L1 is L3)