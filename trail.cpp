#include <iostream>
#include <math.h>
using namespace std;

int N;
int fives = 5;
int division = 1; 
int answer = 0; 

int main()
{
    cin >> N;

    while(division > 0)
    {
        division = floor(N / fives);

        answer = answer + division;

        fives = fives * 5;
    }

    cout << answer;
    return answer;
}