export const min = (a, b, c) => {
  if (a <= b && a <= c) {
    return a;
    } else {
    if (a >= b && b <= c) {
    return b;
    } else {
    return c;
    }
    }
}