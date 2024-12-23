#include <algorithm>
#include <cmath>
#include <cstdio>
#include <iostream>
#include <map>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <set>
#include <vector>
#include <stack>

#define u16 uint16_t
#define u32 uint32_t
#define u64 uint64_t
#define i16 int16_t
#define i32 int32_t
#define i64 int64_t

#define FOR(i, n) for (int i = 0; i < n; i++)
#define FFOR(i, a, b) for (int i = a; i < b; i++)
#define RFOR(i, n) for (int i = n - 1; i >= 0; i--)
#define RFFOR(i, a, b) for (int i = b - 1; i >= a; i--)

#define MAX_OF(a, b) (a > b ? a : b)
#define MIN_OF(a, b) (a < b ? a : b)
#define MIN_IN(A) *(std::min_element(A.begin(), A.end()));
#define MAX_IN(A) *(std::max_element(A.begin(), A.end()));
#define MAX_AT(A) (std::max_element(A.begin(), A.end()) - A.begin());
#define MIN_AT(A) (std::min_element(A.begin(), A.end()) - A.begin());

#define PRINT(a) std::cout << a << std::endl;

template <typename T>
bool SORT_DESC(T a, T b)
{
    return a > b;
}

inline void fast()
{
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
}

using namespace std;

int main()
{
    fast();

    int numCases;
    std::cin >> numCases;
    FOR(_case, numCases)
    {
        int n, k;
        cin >> n >> k;
        vector<int> a(n);
        FOR(i, n)
        {
            cin >> a[i];
        }

        sort(a.begin(), a.end(), SORT_DESC<int>);

        int sum = 0;
        bool ok = false;
        FOR(i, n)
        {
            sum += a[i];

            if (sum > k)
            {
                // backtrack
                sum -= a[i];
                PRINT(k - sum);
                ok = true;
                break;
            }
            else if (sum == k)
            {
                PRINT(0);
                ok = true;
                break;
            }
        }

        if (ok)
        {
            continue;
        }

        if (sum < k)
        {
            PRINT(k - sum);
            continue;
        }
    }
}