import string
import math
import random

alphabet = string.ascii_letters
sentence1 = 'Jim quickly realized that the beautiful gowns are expensive'

def counter(input_string):
    counts = {}
    for letter in input_string:
        if letter == " ":
            pass
        elif letter not in counts:
            counts[letter] = 1
        else:
            counts[letter] = counts[letter] + 1
    return counts

counter(sentence1)

address = """Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth."""

address_count = counter(address)


def greatest_value(dictionary):
    highest_key = ""
    highest_value = 0
    for key, value in dictionary.items():
        if value > highest_value:
            highest_value = value
            highest_key = key
            print("new highest keyvalue pair",key,value)
    return highest_key

highKey = greatest_value(address_count)
print(highKey)


# QUESTION 2
quarterPi = math.pi/4
print(quarterPi)

random.seed(1) # Fixes the seed of the random number generator.
def rand():
    return random.uniform(-1.0,1.0)
print(rand())

def in_circle(x,origin):
    is_in_circle = True
    if False:
        is_in_circle = False
    return is_in_circle










