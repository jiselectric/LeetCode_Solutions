class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1)
            return s;
        
        int length = s.length();
        int flag = 1; 
        int index = 0; 
        string answer = "";
        vector<string> array(numRows, "");

        for (int i = 0; i < length; i++)
        {
            array[index] += s[i];
            index += flag;

            if (!index || index == numRows - 1)
            {
                flag *= -1;
            }
        }

        for (int i = 0; i < array.size(); i++)
        {
            answer += array[i];
        }
        
        return answer;
    }
};