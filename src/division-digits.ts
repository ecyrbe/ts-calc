import { AddDigits } from "./addition-digits";
import { Digit, TrimZeros } from "./common";
import { CompareDigits } from "./compare";
import { SubDigits } from "./substraction-digits";

export type Rest<T extends Digit[]> = T extends [
  Digit,
  ...infer R extends Digit[]
]
  ? R
  : never;

type TruncateWith<
  T extends Digit[],
  U extends Digit[],
  Acc extends Digit[] = []
> = U extends []
  ? [T, Acc]
  : T extends [infer D extends Digit, ...infer DR extends Digit[]]
  ? TruncateWith<DR, Rest<U>, [...Acc, D]>
  : [T, Acc];

type ComputeLongDivParams<
  D extends Digit[],
  M extends Digit[],
  Comp1 = CompareDigits<D, M>,
  Mul2 extends Digit[] = AddDigits<M, M>,
  Comp2 = CompareDigits<D, Mul2>,
  Mul3 extends Digit[] = AddDigits<M, Mul2>,
  Comp3 = CompareDigits<D, Mul3>,
  Mul4 extends Digit[] = AddDigits<M, Mul3>,
  Comp4 = CompareDigits<D, Mul4>,
  Mul5 extends Digit[] = AddDigits<M, Mul4>,
  Comp5 = CompareDigits<D, Mul5>,
  Mul6 extends Digit[] = AddDigits<M, Mul5>,
  Comp6 = CompareDigits<D, Mul6>,
  Mul7 extends Digit[] = AddDigits<M, Mul6>,
  Comp7 = CompareDigits<D, Mul7>,
  Mul8 extends Digit[] = AddDigits<M, Mul7>,
  Comp8 = CompareDigits<D, Mul8>,
  Mul9 extends Digit[] = AddDigits<M, Mul8>,
  Comp9 = CompareDigits<D, Mul9>
> = Comp1 extends 0
  ? { B: 1; R: [0] }
  : Comp1 extends 1
  ? Comp2 extends 0
    ? { B: 2; R: [0] }
    : Comp2 extends 1
    ? Comp3 extends 0
      ? { B: 3; R: [0] }
      : Comp3 extends 1
      ? Comp4 extends 0
        ? { B: 4; R: [0] }
        : Comp4 extends 1
        ? Comp5 extends 0
          ? { B: 5; R: [0] }
          : Comp5 extends 1
          ? Comp6 extends 0
            ? { B: 6; R: [0] }
            : Comp6 extends 1
            ? Comp7 extends 0
              ? { B: 7; R: [0] }
              : Comp7 extends 1
              ? Comp8 extends 0
                ? { B: 8; R: [0] }
                : Comp8 extends 1
                ? Comp9 extends 0
                  ? { B: 9; R: [0] }
                  : Comp9 extends 1
                  ? { B: 9; R: SubDigits<D, Mul9> }
                  : { B: 8; R: SubDigits<D, Mul8> }
                : { B: 7; R: SubDigits<D, Mul7> }
              : { B: 6; R: SubDigits<D, Mul6> }
            : { B: 5; R: SubDigits<D, Mul5> }
          : { B: 4; R: SubDigits<D, Mul4> }
        : { B: 3; R: SubDigits<D, Mul3> }
      : { B: 2; R: SubDigits<D, Mul2> }
    : { B: 1; R: SubDigits<D, M> }
  : { B: 0; R: D };

/**
 * compute the long division of a number by a divisor
 * @param A the Numerator Cut after M digits
 * @param D the Numerator Cut with M first digits
 * @param M the Divisor
 * @param Q the Quotient
 * @param B the Beta value used to compute the quotient and the remainder
 * @param R the Remainder
 * @see https://en.wikipedia.org/wiki/Long_division#Algorithm_for_arbitrary_base
 */
export type DivModDigits<
  A extends Digit[],
  D extends Digit[],
  M extends Digit[],
  Q extends Digit[] = [],
  Compute extends { B: Digit; R: Digit[] } = ComputeLongDivParams<D, M>,
  B extends Digit = Compute["B"],
  R extends Digit[] = Compute["R"]
> = A extends [infer A1 extends Digit, ...infer AR extends Digit[]]
  ? DivModDigits<AR, TrimZeros<[...R, A1]>, M, [...Q, B]>
  : [[...Q, B], R];

export type DivDigits<N extends Digit[], M extends Digit[]> = TruncateWith<
  N,
  M
> extends [infer A extends Digit[], infer D extends Digit[]]
  ? DivModDigits<A, D, M>[0]
  : never;

export type ModDigits<N extends Digit[], M extends Digit[]> = TruncateWith<
  N,
  M
> extends [infer A extends Digit[], infer D extends Digit[]]
  ? DivModDigits<A, D, M>[1]
  : never;
