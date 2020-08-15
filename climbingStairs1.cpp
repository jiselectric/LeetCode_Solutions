#include <iostream>
#include <unordered_map>
#define IO_FAST() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
using namespace std;

int N; 

int main()
{
    int a = 1, b = 1; 
    cin >> N; 

    while (N--)
    {
        a = (b = b + a) - a;
    }

    cout << a << endl;
}