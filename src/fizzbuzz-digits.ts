import { Digit } from "./common";
import { ModDigits } from "./division-digits";

export type FizzBuzzDigits<N extends Digit[]> = ModDigits<N, [3]> extends [0]
  ? ModDigits<N, [5]> extends [0]
    ? "FizzBuzz"
    : "Fizz"
  : ModDigits<N, [5]> extends [0]
  ? "Buzz"
  : N;
