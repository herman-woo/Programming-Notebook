filename = "inputfile.txt"
for line in open(filename):
    line = line.rstrip().split(" ")
    print(line)



'''
Writing to files
'''

#create the file object to write to
F = open("output.txt", "w")
F.write("Learning Python\n")
F.close()
# once finished writing we must close the object

F = open("input.txt", "w")
F.write("Hello\nWorld")
F.close()
lines = []
for line in open("input.txt"):
    lines.append(line.strip())
print(lines)
    