import { Digit, TrimZeros } from "./common";
import { DivModDigits } from "./division-digits";
import { MulDigits } from "./multiply-digits";

export type PowerDigits<
  T extends Digit[],
  U extends Digit[],
  Acc extends Digit[] = [1]
> = U extends [0]
  ? [1]
  : U extends [1]
  ? MulDigits<T, Acc>
  : U extends [infer UN extends Digit, ...infer UR extends Digit[]]
  ? DivModDigits<UR, [UN], [2]> extends {
      Quotient: infer Q extends Digit[];
      Remainder: infer R extends Digit[];
    }
    ? TrimZeros<R> extends [0]
      ? PowerDigits<MulDigits<T, T>, TrimZeros<Q>, Acc>
      : PowerDigits<MulDigits<T, T>, TrimZeros<Q>, MulDigits<T, Acc>>
    : never
  : Acc;
