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

inline void fast()
{
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
}

using namespace std;

int main()
{
    fast();

    int n;
    std::cin >> n;
    vector<int> x_ints(n);
    vector<int> y_ints(n);

    FOR(i, n)
    {
        std::cin >> x_ints[i];
    }
    FOR(i, n)
    {
        std::cin >> y_ints[i];
    }

    int max = -10000000;
    FOR(i, n - 1)
    {
        int x1 = x_ints[i];
        int y1 = y_ints[i];
        FFOR(j, i + 1, n)
        {
            int x2 = x_ints[j];
            int y2 = y_ints[j];

            int x = x2 - x1;
            int y = y2 - y1;
            int dist = x * x + y * y;
            max = MAX_OF(max, dist);
        }
    }

    PRINT(max);
}