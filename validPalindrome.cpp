#include <iostream>
#include <string>
#include <cctype>
#include <algorithm>
using namespace std;

string s;
string newString = "";
string testString = "";

bool isPalindrome(string text)
{
    for (int i = text.length() - 1; i >= 0; i--)
    {
        testString += text[i];
    }

    if (testString == text)
        cout << "T";
    else
        cout << "F";
    
    return testString == text;
}

int main()
{
    getline(cin, s);

    // remove space and !alphabet , convert to lower case
    for (int i = 0; i < s.length(); i++)
    {
        char lowerCase = tolower(s[i]);

        if (!((lowerCase >= 'a' && lowerCase <= 'z') || (lowerCase >= '0' && lowerCase <= '9')))
            continue;
        else
            newString += s[i];
    }

    //cout << newString;

    isPalindrome(newString);

    return 0; 
}