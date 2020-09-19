class Solution {
public:
    string intToRoman(int num) {
        string symbol[13] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        int value[13] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        
        string result = "";
        int quotient = 1; 
        int i = 0; 
        
        while (num != 0)
        {
            quotient = num / value[i];
            
            for (int k = 0; k < quotient; k++)
            {
                result = result + symbol[i];
            }
            
            num = num - (quotient * value[i]);
            i = i + 1;
        }
        
        return result;
    }
};