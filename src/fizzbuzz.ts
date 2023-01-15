import {
  ToNumber,
  MakeDigitNumber,
  FromDigitNumber,
  Normalize,
  DigitNumber,
  Sign,
  Num,
  ToDigitNumber,
  ToString,
  MulSign,
  Digit,
} from "./common";
import { FizzBuzzDigits } from "./fizzbuzz-digits";

export type FizzBuzzDigitNumbers<
  T extends DigitNumber,
  Result extends Digit[] | string = FizzBuzzDigits<Num<T>>
> = Result extends Digit[] ? MakeDigitNumber<Sign<T>, Result> : Result;

export type FizzBuzz<
  T extends number | bigint,
  Result extends string | DigitNumber = FizzBuzzDigitNumbers<
    ToDigitNumber<ToString<T>>
  >
> = Result extends DigitNumber ? FromDigitNumber<Normalize<Result>> : Result;
