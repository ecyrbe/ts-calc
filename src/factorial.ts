import {
  Digit,
  MakeDigitNumber,
  ToNumber,
  Normalize,
  FromDigitNumber,
} from "./common";
import { MulDigits } from "./multiply-digits";
import { RangeOfDigits } from "./range";

type ProductOfTupleDigits<
  Range extends Digit[][],
  Acc extends Digit[] = [1]
> = Range extends [infer N extends Digit[], ...infer R extends Digit[][]]
  ? ProductOfTupleDigits<R, MulDigits<Acc, N>>
  : Acc;

export type Factorial<T extends number | bigint> = ToNumber<
  FromDigitNumber<
    Normalize<MakeDigitNumber<"", ProductOfTupleDigits<RangeOfDigits<2, T>>>>
  >
>;
