#Functions in Python
'''
- Procedure Decompsition:



'''
import random


def add(a,b):
    mySum = a + b
    return mySum


sum1 = add(9,10)
print(sum1)

def add_and_sub(a,b):
    mysum = a + b
    mydiff = a - b
    return (mysum,mydiff)

print(add_and_sub(55,54))

'''
you can assign another variable to point to the same function
'''

newfunc = add_and_sub
print(newfunc(550,540))

def increase_proportianately(arr,x):
    return [num*x for num in arr]

myList = [1,2,3,4,5,6,7,8,9,10]

print(increase_proportianately(myList,10))


def modify(mylist):
    mylist[0] *= 10
    return(mylist)
L = [1, 3, 5, 7, 9]
M = modify(L)
M is L




def intersect(s1, s2):
    res = []
    for x in s1:
        if x in s2:
            res.append(x)
    return res

inter1 = intersect([1,2,3,4,5,6,76,7,8,9,10],[1,4,7,8,33,44,55,66,77,88,9,10,100])
print(inter1)


#From chatGPT, differences in mutable and immutable objects
'''
This difference in behavior between the examples with `L1`/`L2` and `m`/`n` stems from how Python handles mutable versus immutable objects.

### Immutable Objects (like integers, strings, tuples)
In the `m` and `n` example:
- When you assign `m = 5` and then `n = m`, both `m` and `n` initially point to the same integer object with the value of 5.
- However, integers in Python are immutable, meaning you cannot change the value of the integer object once it's created.
- When you do `n += 1`, Python doesn't alter the integer object containing 5; instead, it creates a new integer object with the value 6 and changes `n` to point to this new object.
- Since `m` is still pointing to the original integer object with the value 5, it remains unchanged.

### Mutable Objects (like lists, dictionaries, sets)
In the `L1` and `L2` example:
- `L1` and `L2` point to the same list object when you do `L2 = L1`.
- Lists are mutable, which means their content can be changed after they are created.
- When you modify the list through `L2` (like with `L2.append(5)`), you are modifying the list object itself, not the reference `L2`.
- Since `L1` points to the same list object, the changes are visible when accessing the list through `L1`.

### Summary
The key distinction here is between mutable and immutable objects:
- **Immutable objects** do not allow their contents to be altered after they are created. Any operation that seems to modify an immutable object will instead create a new object.
- **Mutable objects** allow their contents to be altered after creation. Any modifications to the object through any reference will be visible through all references to that object.

This explains why changes via one reference to a mutable object (like a list) affect all references to that object, while "changes" to an immutable object (like an integer) only affect the reference through which the "change" was made.
'''



def password(length):
    pw = str()
    characters = "abcdefghijklmnopqrstuvwxyz"
    n = length


    while (n > 0):
        pw = pw + random.choice(characters)
        n -= 1

    return pw

print(password(10))



def is_vowel(letter):
    if letter in "aeiouy":
        return(True)
    else:
        return(False)
  

print(is_vowel("a"),is_vowel("b"),is_vowel('c'),is_vowel('d'),is_vowel('e'))



def factorial(n):
    if n == 0:
        return 1
    else:
        N = 1
        for i in range(1,n+1):
            N = N * i
        return N
    
print(factorial(4))