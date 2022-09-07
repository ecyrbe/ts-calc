export type Absolute<T extends number | bigint> =
  `${T}` extends `-${infer U extends number | bigint}` ? U : T;
