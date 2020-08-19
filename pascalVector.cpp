#include <iostream>
#include <vector>
using namespace std; 

int N; 

vector<int> getRow(int rowIndex)
{
    vector<int> result(rowIndex + 1, 1);
        
        for (int i = 2; i <= rowIndex; i++)
        {
            for (int j = i - 1; j > 0; j--)
            {
                result[j] = result[j] + result[j-1];
            }
        }
        
        for (int i = 0; i < rowIndex + 1; i++)
        {
            cout << result[i] << endl;
        }

        return result;
}

int main()
{
    cout << "Input : ";
    cin >> N;

    getRow(N);

    return 0;
}