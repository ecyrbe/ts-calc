import { Add, Sub, Mul, Div, Mod } from "./index";

type TestAdd = Add<12345678909765345678n, 234567876542n>;
//     ^?

type TestSub = Sub<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestMul = Mul<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestDiv = Div<1234567890976509876543456n, 234567876542n>;
//     ^?

type TestMod = Mod<1234567890976509876543456n, 234567876542n>;
//     ^?
