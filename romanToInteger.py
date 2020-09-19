def solution(s):
    result = 0
    dic = {"M" : 1000, "CM" : 900, "D" : 500, "CD" : 400, "C" : 100, "XC" : 90, "L" : 50, "XL" : 40, "X" : 10, "IX" : 9, "V" : 5, "IV" : 4, "I" : 1}

    if (s in dic):
        return dic[s]
    else:
        i = 0
        while (i < len(s)):
            chk = s[i:(i+2)]
            if (chk in dic):
                result = result + dic[s[i:(i+2)]]
                i = i + 2
            else:
                result = result + dic[s[i]]
                i = i + 1
        
        return result


print(solution("III"))
