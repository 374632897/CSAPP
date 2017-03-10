#include <stdio.h>
void inplace_swap (int *x, int *y) {
  printf("%d\n %d\n", x, y);
  *y = *x ^ *y;
  *x = *x ^ *y;
  *y = *x ^ *y;
  printf("%d\n %d\n", x, y);
}
int main () {
  int x = 5, y = 6;
  inplace_swap(&x, &y);
  return 0;
}
