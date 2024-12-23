CXXFLAGS="-O3 -march=native -mavx2 -Wall --std=c++17 -fsanitize=address,undefined,leak"
rm *.out 2> /dev/null
g++ index.cpp -o index.out $CXXFLAGS && ./index.out < input.txt
