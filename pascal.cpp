#include <iostream>
#include <vector>
using namespace std;

int N; 
unsigned long long result[41][41];

int main()
{
    cin >> N;

    for (int i = 0; i <= N; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            if (j == 0)
                result[i][j] = 1;
            else if (i == j)
                result[i][j] = 1; 
            else
                result[i][j] = (result[i-1][j-1]) + (result[i-1][j]);
        }
    }

    for (int i = 0; i <= N; i++)
    {
        cout << result[N][i] << endl;
    }

    return 0; 
}