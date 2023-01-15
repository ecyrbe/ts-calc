import { FizzBuzz } from "./fizzbuzz";
import { Add, Sub, Mul, Div, Mod, Power, Factorial } from "./index";

type TestAdd = Add<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestSub = Sub<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestMul = Mul<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestDiv = Div<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestMod = Mod<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestEuclidianEquality = Add<Mul<TestDiv, 234567876542n>, TestMod>;
//     ^?

type TestPower = Power<-17, 42>;
//     ^?

type TestFactorial = Factorial<42>;
//     ^?

type TestFizzBuzz = FizzBuzz<1234567890976509876543450n>;
//     ^?
