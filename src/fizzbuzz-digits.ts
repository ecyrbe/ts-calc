import { Digit } from "./common";
import { ModDigits } from "./division-digits";

export type FizzBuzzDigits<
  N extends Digit[],
  Fizz extends Digit[] = ModDigits<N, [3]>,
  Buzz extends Digit[] = ModDigits<N, [5]>
> = Fizz extends [0]
  ? Buzz extends [0]
    ? "FizzBuzz"
    : "Fizz"
  : Buzz extends [0]
  ? "Buzz"
  : N;
