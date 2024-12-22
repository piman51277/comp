CXXFLAGS = -O3 -march=native -mavx2 -Wall -fsanitize=address,undefined,leak
rm index
g++ index.cpp -o index $CXXFLAGS && ./index
