import math

class Solution(object):
    def myAtoi(self, str):
        str = str.lstrip()
        flag = True
        result = 0
        length = len(str)
        times = 1
        
        if len(str) == 0:
            return 0 
        
        if str[0] == "-":
            flag = False
            str = str[1:length]
            length = length - 1
        elif str[0] == "+":
            str = str = str[1:length]
            length = length - 1

        try:
            type(int(str[0])) == type(1)
        except:
            return 0


        for i in range(0, length):
            try:
                type(int(str[i])) == type(1)
                #312009
                adder = int(str[i])

                result = (result * times) + adder
                times = 10
            except:
                break


        if result >= math.pow(2, 31) and flag == True:
            return 2147483647
        elif result >= math.pow(2, 31) and flag == False:
            return -2147483648

        if flag == True:
            return result
        else:
            result = result * -1
            return result