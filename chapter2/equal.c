#include <stdio.h>

int equal (int x, int y) {
  if (
    x ^ y
  ) {
    return 0;
  }
  return 1;
}
int main () {
  int isEuqal1 = equal(2, 2);
  int isEuqal2 = equal(2, 3);
  int isEuqal3 = equal(-1, 9);
  printf("%d\n%d\n%d\n", isEuqal1, isEuqal2, isEuqal3);
  return 0;
}
