#include <iostream>
#include <unordered_map>
#define IO_FAST() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);
using namespace std;

int N; 
unordered_map<int, int> dp;

int main()
{
    IO_FAST();

    cin >> N;

    if (N <= 1)
        cout << 1 << endl;

    dp[0] = 1; 
    dp[1] = 1; 

    for (int i = 2; i <= N; i++)
    {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    cout << dp[N] << endl;

    return 0;
}