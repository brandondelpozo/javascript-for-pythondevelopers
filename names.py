names = []

with open("names.txt", "r") as file:
    for line in sorted(file):
        names.append(line.rstrip())
        
for name in sorted(names):
    print(f"hello, {name}")
    