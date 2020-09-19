def solution(s):
    result = {}
    size = 0
    maxsize = 0 
    string = ""

    for i in range (len(s)):
        if i == len(s) - 1:
            if s[i] == s[i-1]:
                size = size + 1
                string = string + s[i]
                result[size] = string
        else:        
            if s[i] != s[i+1] and s[i] not in string:
                size = size + 1
                string = string + s[i]
                result[size] = string
            else:
                string = s[i]
                size = 0

        if size > maxsize:
            maxsize = size
        
    return maxsize


print(solution("abcabc"))
