def p(a,b):
    for char in a:
        for num in b:
            print(char,num)
            
print(p(["a","b","c"],[1,2,3]))