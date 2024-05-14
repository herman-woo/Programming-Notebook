'''
#List Comprehension
In Python we are able to create a list from a for loop in 1 line. I dont know in detail yet, but apparently this operation is very fast.
also the syntax is more elegant.

'''


'''
here in this example this is a normal way to generate a list of squared numbers from another list
'''
numbers = range(10)
squares = []
for number in numbers:
    square = number**2
    squares.append(square)
print(squares)


''' but the exact same idea can be acomplished in 1 line with list comprehensions'''
squares2 = [number**2 for number in numbers]
print(squares2)


'''Both the for loop and the if condition can be used within 1 comprehension'''
print("How can you use a list comprehension, including if and for, to sum the odd numbers from 0 through 9?")

sumNumbers = range(9)
print(sum([num for num in sumNumbers if num%2 != 0]))

list101 = range(101)
list100 = range(100)
list99 = range(99)

listOfLists = [list101,list100,list99]
for list in listOfLists:
    print(sum([num for num in list if len(list) <= 100]))

