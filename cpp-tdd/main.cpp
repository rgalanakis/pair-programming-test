#include <iostream>
#include <string>


std::string process(std::string s) {
    return "Yo!";
}

int main(int argc, char *argv[]) {
    std::string input = argv[1];
    std::string expected = argv[2];
    std::string result = process(input);
    std::cout << "Input: ";
    std::cout << input;
    std::cout << ", Result: ";
    std::cout << result;
    std::cout << ", Expected: ";
    std::cout << expected;
    std::cout << '\n';
    if (result.compare(expected) == 0) {
        std::cout << "pass";
    } else {
        std::cout << "FAIL";
    }
    std::cout << '\n';
    return 0;
}
