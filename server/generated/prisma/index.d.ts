
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Generation_SIN
 * 
 */
export type Generation_SIN = $Result.DefaultSelection<Prisma.$Generation_SINPayload>
/**
 * Model Generation_Norte
 * 
 */
export type Generation_Norte = $Result.DefaultSelection<Prisma.$Generation_NortePayload>
/**
 * Model Generation_Sul
 * 
 */
export type Generation_Sul = $Result.DefaultSelection<Prisma.$Generation_SulPayload>
/**
 * Model Generation_Nordeste
 * 
 */
export type Generation_Nordeste = $Result.DefaultSelection<Prisma.$Generation_NordestePayload>
/**
 * Model Generation_COSU
 * 
 */
export type Generation_COSU = $Result.DefaultSelection<Prisma.$Generation_COSUPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Generation_SINS
 * const generation_SINS = await prisma.generation_SIN.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Generation_SINS
   * const generation_SINS = await prisma.generation_SIN.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.generation_SIN`: Exposes CRUD operations for the **Generation_SIN** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generation_SINS
    * const generation_SINS = await prisma.generation_SIN.findMany()
    * ```
    */
  get generation_SIN(): Prisma.Generation_SINDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generation_Norte`: Exposes CRUD operations for the **Generation_Norte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generation_Nortes
    * const generation_Nortes = await prisma.generation_Norte.findMany()
    * ```
    */
  get generation_Norte(): Prisma.Generation_NorteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generation_Sul`: Exposes CRUD operations for the **Generation_Sul** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generation_Suls
    * const generation_Suls = await prisma.generation_Sul.findMany()
    * ```
    */
  get generation_Sul(): Prisma.Generation_SulDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generation_Nordeste`: Exposes CRUD operations for the **Generation_Nordeste** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generation_Nordestes
    * const generation_Nordestes = await prisma.generation_Nordeste.findMany()
    * ```
    */
  get generation_Nordeste(): Prisma.Generation_NordesteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generation_COSU`: Exposes CRUD operations for the **Generation_COSU** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generation_COSUS
    * const generation_COSUS = await prisma.generation_COSU.findMany()
    * ```
    */
  get generation_COSU(): Prisma.Generation_COSUDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Generation_SIN: 'Generation_SIN',
    Generation_Norte: 'Generation_Norte',
    Generation_Sul: 'Generation_Sul',
    Generation_Nordeste: 'Generation_Nordeste',
    Generation_COSU: 'Generation_COSU'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "generation_SIN" | "generation_Norte" | "generation_Sul" | "generation_Nordeste" | "generation_COSU"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Generation_SIN: {
        payload: Prisma.$Generation_SINPayload<ExtArgs>
        fields: Prisma.Generation_SINFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Generation_SINFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Generation_SINFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>
          }
          findFirst: {
            args: Prisma.Generation_SINFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Generation_SINFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>
          }
          findMany: {
            args: Prisma.Generation_SINFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>[]
          }
          create: {
            args: Prisma.Generation_SINCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>
          }
          createMany: {
            args: Prisma.Generation_SINCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Generation_SINCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>[]
          }
          delete: {
            args: Prisma.Generation_SINDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>
          }
          update: {
            args: Prisma.Generation_SINUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>
          }
          deleteMany: {
            args: Prisma.Generation_SINDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Generation_SINUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Generation_SINUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>[]
          }
          upsert: {
            args: Prisma.Generation_SINUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SINPayload>
          }
          aggregate: {
            args: Prisma.Generation_SINAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneration_SIN>
          }
          groupBy: {
            args: Prisma.Generation_SINGroupByArgs<ExtArgs>
            result: $Utils.Optional<Generation_SINGroupByOutputType>[]
          }
          count: {
            args: Prisma.Generation_SINCountArgs<ExtArgs>
            result: $Utils.Optional<Generation_SINCountAggregateOutputType> | number
          }
        }
      }
      Generation_Norte: {
        payload: Prisma.$Generation_NortePayload<ExtArgs>
        fields: Prisma.Generation_NorteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Generation_NorteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Generation_NorteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>
          }
          findFirst: {
            args: Prisma.Generation_NorteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Generation_NorteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>
          }
          findMany: {
            args: Prisma.Generation_NorteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>[]
          }
          create: {
            args: Prisma.Generation_NorteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>
          }
          createMany: {
            args: Prisma.Generation_NorteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Generation_NorteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>[]
          }
          delete: {
            args: Prisma.Generation_NorteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>
          }
          update: {
            args: Prisma.Generation_NorteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>
          }
          deleteMany: {
            args: Prisma.Generation_NorteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Generation_NorteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Generation_NorteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>[]
          }
          upsert: {
            args: Prisma.Generation_NorteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NortePayload>
          }
          aggregate: {
            args: Prisma.Generation_NorteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneration_Norte>
          }
          groupBy: {
            args: Prisma.Generation_NorteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Generation_NorteGroupByOutputType>[]
          }
          count: {
            args: Prisma.Generation_NorteCountArgs<ExtArgs>
            result: $Utils.Optional<Generation_NorteCountAggregateOutputType> | number
          }
        }
      }
      Generation_Sul: {
        payload: Prisma.$Generation_SulPayload<ExtArgs>
        fields: Prisma.Generation_SulFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Generation_SulFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Generation_SulFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>
          }
          findFirst: {
            args: Prisma.Generation_SulFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Generation_SulFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>
          }
          findMany: {
            args: Prisma.Generation_SulFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>[]
          }
          create: {
            args: Prisma.Generation_SulCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>
          }
          createMany: {
            args: Prisma.Generation_SulCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Generation_SulCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>[]
          }
          delete: {
            args: Prisma.Generation_SulDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>
          }
          update: {
            args: Prisma.Generation_SulUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>
          }
          deleteMany: {
            args: Prisma.Generation_SulDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Generation_SulUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Generation_SulUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>[]
          }
          upsert: {
            args: Prisma.Generation_SulUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_SulPayload>
          }
          aggregate: {
            args: Prisma.Generation_SulAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneration_Sul>
          }
          groupBy: {
            args: Prisma.Generation_SulGroupByArgs<ExtArgs>
            result: $Utils.Optional<Generation_SulGroupByOutputType>[]
          }
          count: {
            args: Prisma.Generation_SulCountArgs<ExtArgs>
            result: $Utils.Optional<Generation_SulCountAggregateOutputType> | number
          }
        }
      }
      Generation_Nordeste: {
        payload: Prisma.$Generation_NordestePayload<ExtArgs>
        fields: Prisma.Generation_NordesteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Generation_NordesteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Generation_NordesteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>
          }
          findFirst: {
            args: Prisma.Generation_NordesteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Generation_NordesteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>
          }
          findMany: {
            args: Prisma.Generation_NordesteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>[]
          }
          create: {
            args: Prisma.Generation_NordesteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>
          }
          createMany: {
            args: Prisma.Generation_NordesteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Generation_NordesteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>[]
          }
          delete: {
            args: Prisma.Generation_NordesteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>
          }
          update: {
            args: Prisma.Generation_NordesteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>
          }
          deleteMany: {
            args: Prisma.Generation_NordesteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Generation_NordesteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Generation_NordesteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>[]
          }
          upsert: {
            args: Prisma.Generation_NordesteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_NordestePayload>
          }
          aggregate: {
            args: Prisma.Generation_NordesteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneration_Nordeste>
          }
          groupBy: {
            args: Prisma.Generation_NordesteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Generation_NordesteGroupByOutputType>[]
          }
          count: {
            args: Prisma.Generation_NordesteCountArgs<ExtArgs>
            result: $Utils.Optional<Generation_NordesteCountAggregateOutputType> | number
          }
        }
      }
      Generation_COSU: {
        payload: Prisma.$Generation_COSUPayload<ExtArgs>
        fields: Prisma.Generation_COSUFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Generation_COSUFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Generation_COSUFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>
          }
          findFirst: {
            args: Prisma.Generation_COSUFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Generation_COSUFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>
          }
          findMany: {
            args: Prisma.Generation_COSUFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>[]
          }
          create: {
            args: Prisma.Generation_COSUCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>
          }
          createMany: {
            args: Prisma.Generation_COSUCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Generation_COSUCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>[]
          }
          delete: {
            args: Prisma.Generation_COSUDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>
          }
          update: {
            args: Prisma.Generation_COSUUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>
          }
          deleteMany: {
            args: Prisma.Generation_COSUDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Generation_COSUUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Generation_COSUUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>[]
          }
          upsert: {
            args: Prisma.Generation_COSUUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Generation_COSUPayload>
          }
          aggregate: {
            args: Prisma.Generation_COSUAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneration_COSU>
          }
          groupBy: {
            args: Prisma.Generation_COSUGroupByArgs<ExtArgs>
            result: $Utils.Optional<Generation_COSUGroupByOutputType>[]
          }
          count: {
            args: Prisma.Generation_COSUCountArgs<ExtArgs>
            result: $Utils.Optional<Generation_COSUCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    generation_SIN?: Generation_SINOmit
    generation_Norte?: Generation_NorteOmit
    generation_Sul?: Generation_SulOmit
    generation_Nordeste?: Generation_NordesteOmit
    generation_COSU?: Generation_COSUOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Generation_SIN
   */

  export type AggregateGeneration_SIN = {
    _count: Generation_SINCountAggregateOutputType | null
    _avg: Generation_SINAvgAggregateOutputType | null
    _sum: Generation_SINSumAggregateOutputType | null
    _min: Generation_SINMinAggregateOutputType | null
    _max: Generation_SINMaxAggregateOutputType | null
  }

  export type Generation_SINAvgAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SINSumAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SINMinAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SINMaxAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SINCountAggregateOutputType = {
    id: number
    instant: number
    instantDate: number
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _all: number
  }


  export type Generation_SINAvgAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SINSumAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SINMinAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SINMaxAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SINCountAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
    _all?: true
  }

  export type Generation_SINAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_SIN to aggregate.
     */
    where?: Generation_SINWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_SINS to fetch.
     */
    orderBy?: Generation_SINOrderByWithRelationInput | Generation_SINOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Generation_SINWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_SINS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_SINS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generation_SINS
    **/
    _count?: true | Generation_SINCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Generation_SINAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Generation_SINSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Generation_SINMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Generation_SINMaxAggregateInputType
  }

  export type GetGeneration_SINAggregateType<T extends Generation_SINAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneration_SIN]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneration_SIN[P]>
      : GetScalarType<T[P], AggregateGeneration_SIN[P]>
  }




  export type Generation_SINGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Generation_SINWhereInput
    orderBy?: Generation_SINOrderByWithAggregationInput | Generation_SINOrderByWithAggregationInput[]
    by: Generation_SINScalarFieldEnum[] | Generation_SINScalarFieldEnum
    having?: Generation_SINScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Generation_SINCountAggregateInputType | true
    _avg?: Generation_SINAvgAggregateInputType
    _sum?: Generation_SINSumAggregateInputType
    _min?: Generation_SINMinAggregateInputType
    _max?: Generation_SINMaxAggregateInputType
  }

  export type Generation_SINGroupByOutputType = {
    id: number
    instant: string
    instantDate: Date
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _count: Generation_SINCountAggregateOutputType | null
    _avg: Generation_SINAvgAggregateOutputType | null
    _sum: Generation_SINSumAggregateOutputType | null
    _min: Generation_SINMinAggregateOutputType | null
    _max: Generation_SINMaxAggregateOutputType | null
  }

  type GetGeneration_SINGroupByPayload<T extends Generation_SINGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Generation_SINGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Generation_SINGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Generation_SINGroupByOutputType[P]>
            : GetScalarType<T[P], Generation_SINGroupByOutputType[P]>
        }
      >
    >


  export type Generation_SINSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_SIN"]>

  export type Generation_SINSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_SIN"]>

  export type Generation_SINSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_SIN"]>

  export type Generation_SINSelectScalar = {
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }

  export type Generation_SINOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instant" | "instantDate" | "hydro" | "nuclear" | "solar" | "thermal" | "wind", ExtArgs["result"]["generation_SIN"]>

  export type $Generation_SINPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generation_SIN"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instant: string
      instantDate: Date
      hydro: number
      nuclear: number
      solar: number
      thermal: number
      wind: number
    }, ExtArgs["result"]["generation_SIN"]>
    composites: {}
  }

  type Generation_SINGetPayload<S extends boolean | null | undefined | Generation_SINDefaultArgs> = $Result.GetResult<Prisma.$Generation_SINPayload, S>

  type Generation_SINCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Generation_SINFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Generation_SINCountAggregateInputType | true
    }

  export interface Generation_SINDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generation_SIN'], meta: { name: 'Generation_SIN' } }
    /**
     * Find zero or one Generation_SIN that matches the filter.
     * @param {Generation_SINFindUniqueArgs} args - Arguments to find a Generation_SIN
     * @example
     * // Get one Generation_SIN
     * const generation_SIN = await prisma.generation_SIN.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Generation_SINFindUniqueArgs>(args: SelectSubset<T, Generation_SINFindUniqueArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generation_SIN that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Generation_SINFindUniqueOrThrowArgs} args - Arguments to find a Generation_SIN
     * @example
     * // Get one Generation_SIN
     * const generation_SIN = await prisma.generation_SIN.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Generation_SINFindUniqueOrThrowArgs>(args: SelectSubset<T, Generation_SINFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_SIN that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SINFindFirstArgs} args - Arguments to find a Generation_SIN
     * @example
     * // Get one Generation_SIN
     * const generation_SIN = await prisma.generation_SIN.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Generation_SINFindFirstArgs>(args?: SelectSubset<T, Generation_SINFindFirstArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_SIN that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SINFindFirstOrThrowArgs} args - Arguments to find a Generation_SIN
     * @example
     * // Get one Generation_SIN
     * const generation_SIN = await prisma.generation_SIN.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Generation_SINFindFirstOrThrowArgs>(args?: SelectSubset<T, Generation_SINFindFirstOrThrowArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generation_SINS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SINFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generation_SINS
     * const generation_SINS = await prisma.generation_SIN.findMany()
     * 
     * // Get first 10 Generation_SINS
     * const generation_SINS = await prisma.generation_SIN.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generation_SINWithIdOnly = await prisma.generation_SIN.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Generation_SINFindManyArgs>(args?: SelectSubset<T, Generation_SINFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generation_SIN.
     * @param {Generation_SINCreateArgs} args - Arguments to create a Generation_SIN.
     * @example
     * // Create one Generation_SIN
     * const Generation_SIN = await prisma.generation_SIN.create({
     *   data: {
     *     // ... data to create a Generation_SIN
     *   }
     * })
     * 
     */
    create<T extends Generation_SINCreateArgs>(args: SelectSubset<T, Generation_SINCreateArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generation_SINS.
     * @param {Generation_SINCreateManyArgs} args - Arguments to create many Generation_SINS.
     * @example
     * // Create many Generation_SINS
     * const generation_SIN = await prisma.generation_SIN.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Generation_SINCreateManyArgs>(args?: SelectSubset<T, Generation_SINCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generation_SINS and returns the data saved in the database.
     * @param {Generation_SINCreateManyAndReturnArgs} args - Arguments to create many Generation_SINS.
     * @example
     * // Create many Generation_SINS
     * const generation_SIN = await prisma.generation_SIN.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generation_SINS and only return the `id`
     * const generation_SINWithIdOnly = await prisma.generation_SIN.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Generation_SINCreateManyAndReturnArgs>(args?: SelectSubset<T, Generation_SINCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generation_SIN.
     * @param {Generation_SINDeleteArgs} args - Arguments to delete one Generation_SIN.
     * @example
     * // Delete one Generation_SIN
     * const Generation_SIN = await prisma.generation_SIN.delete({
     *   where: {
     *     // ... filter to delete one Generation_SIN
     *   }
     * })
     * 
     */
    delete<T extends Generation_SINDeleteArgs>(args: SelectSubset<T, Generation_SINDeleteArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generation_SIN.
     * @param {Generation_SINUpdateArgs} args - Arguments to update one Generation_SIN.
     * @example
     * // Update one Generation_SIN
     * const generation_SIN = await prisma.generation_SIN.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Generation_SINUpdateArgs>(args: SelectSubset<T, Generation_SINUpdateArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generation_SINS.
     * @param {Generation_SINDeleteManyArgs} args - Arguments to filter Generation_SINS to delete.
     * @example
     * // Delete a few Generation_SINS
     * const { count } = await prisma.generation_SIN.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Generation_SINDeleteManyArgs>(args?: SelectSubset<T, Generation_SINDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_SINS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SINUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generation_SINS
     * const generation_SIN = await prisma.generation_SIN.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Generation_SINUpdateManyArgs>(args: SelectSubset<T, Generation_SINUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_SINS and returns the data updated in the database.
     * @param {Generation_SINUpdateManyAndReturnArgs} args - Arguments to update many Generation_SINS.
     * @example
     * // Update many Generation_SINS
     * const generation_SIN = await prisma.generation_SIN.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generation_SINS and only return the `id`
     * const generation_SINWithIdOnly = await prisma.generation_SIN.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Generation_SINUpdateManyAndReturnArgs>(args: SelectSubset<T, Generation_SINUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generation_SIN.
     * @param {Generation_SINUpsertArgs} args - Arguments to update or create a Generation_SIN.
     * @example
     * // Update or create a Generation_SIN
     * const generation_SIN = await prisma.generation_SIN.upsert({
     *   create: {
     *     // ... data to create a Generation_SIN
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generation_SIN we want to update
     *   }
     * })
     */
    upsert<T extends Generation_SINUpsertArgs>(args: SelectSubset<T, Generation_SINUpsertArgs<ExtArgs>>): Prisma__Generation_SINClient<$Result.GetResult<Prisma.$Generation_SINPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generation_SINS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SINCountArgs} args - Arguments to filter Generation_SINS to count.
     * @example
     * // Count the number of Generation_SINS
     * const count = await prisma.generation_SIN.count({
     *   where: {
     *     // ... the filter for the Generation_SINS we want to count
     *   }
     * })
    **/
    count<T extends Generation_SINCountArgs>(
      args?: Subset<T, Generation_SINCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Generation_SINCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generation_SIN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SINAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Generation_SINAggregateArgs>(args: Subset<T, Generation_SINAggregateArgs>): Prisma.PrismaPromise<GetGeneration_SINAggregateType<T>>

    /**
     * Group by Generation_SIN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SINGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Generation_SINGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Generation_SINGroupByArgs['orderBy'] }
        : { orderBy?: Generation_SINGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Generation_SINGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneration_SINGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generation_SIN model
   */
  readonly fields: Generation_SINFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generation_SIN.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Generation_SINClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Generation_SIN model
   */
  interface Generation_SINFieldRefs {
    readonly id: FieldRef<"Generation_SIN", 'Int'>
    readonly instant: FieldRef<"Generation_SIN", 'String'>
    readonly instantDate: FieldRef<"Generation_SIN", 'DateTime'>
    readonly hydro: FieldRef<"Generation_SIN", 'Float'>
    readonly nuclear: FieldRef<"Generation_SIN", 'Float'>
    readonly solar: FieldRef<"Generation_SIN", 'Float'>
    readonly thermal: FieldRef<"Generation_SIN", 'Float'>
    readonly wind: FieldRef<"Generation_SIN", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Generation_SIN findUnique
   */
  export type Generation_SINFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * Filter, which Generation_SIN to fetch.
     */
    where: Generation_SINWhereUniqueInput
  }

  /**
   * Generation_SIN findUniqueOrThrow
   */
  export type Generation_SINFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * Filter, which Generation_SIN to fetch.
     */
    where: Generation_SINWhereUniqueInput
  }

  /**
   * Generation_SIN findFirst
   */
  export type Generation_SINFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * Filter, which Generation_SIN to fetch.
     */
    where?: Generation_SINWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_SINS to fetch.
     */
    orderBy?: Generation_SINOrderByWithRelationInput | Generation_SINOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_SINS.
     */
    cursor?: Generation_SINWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_SINS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_SINS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_SINS.
     */
    distinct?: Generation_SINScalarFieldEnum | Generation_SINScalarFieldEnum[]
  }

  /**
   * Generation_SIN findFirstOrThrow
   */
  export type Generation_SINFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * Filter, which Generation_SIN to fetch.
     */
    where?: Generation_SINWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_SINS to fetch.
     */
    orderBy?: Generation_SINOrderByWithRelationInput | Generation_SINOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_SINS.
     */
    cursor?: Generation_SINWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_SINS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_SINS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_SINS.
     */
    distinct?: Generation_SINScalarFieldEnum | Generation_SINScalarFieldEnum[]
  }

  /**
   * Generation_SIN findMany
   */
  export type Generation_SINFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * Filter, which Generation_SINS to fetch.
     */
    where?: Generation_SINWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_SINS to fetch.
     */
    orderBy?: Generation_SINOrderByWithRelationInput | Generation_SINOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generation_SINS.
     */
    cursor?: Generation_SINWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_SINS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_SINS.
     */
    skip?: number
    distinct?: Generation_SINScalarFieldEnum | Generation_SINScalarFieldEnum[]
  }

  /**
   * Generation_SIN create
   */
  export type Generation_SINCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * The data needed to create a Generation_SIN.
     */
    data: XOR<Generation_SINCreateInput, Generation_SINUncheckedCreateInput>
  }

  /**
   * Generation_SIN createMany
   */
  export type Generation_SINCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generation_SINS.
     */
    data: Generation_SINCreateManyInput | Generation_SINCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_SIN createManyAndReturn
   */
  export type Generation_SINCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * The data used to create many Generation_SINS.
     */
    data: Generation_SINCreateManyInput | Generation_SINCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_SIN update
   */
  export type Generation_SINUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * The data needed to update a Generation_SIN.
     */
    data: XOR<Generation_SINUpdateInput, Generation_SINUncheckedUpdateInput>
    /**
     * Choose, which Generation_SIN to update.
     */
    where: Generation_SINWhereUniqueInput
  }

  /**
   * Generation_SIN updateMany
   */
  export type Generation_SINUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generation_SINS.
     */
    data: XOR<Generation_SINUpdateManyMutationInput, Generation_SINUncheckedUpdateManyInput>
    /**
     * Filter which Generation_SINS to update
     */
    where?: Generation_SINWhereInput
    /**
     * Limit how many Generation_SINS to update.
     */
    limit?: number
  }

  /**
   * Generation_SIN updateManyAndReturn
   */
  export type Generation_SINUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * The data used to update Generation_SINS.
     */
    data: XOR<Generation_SINUpdateManyMutationInput, Generation_SINUncheckedUpdateManyInput>
    /**
     * Filter which Generation_SINS to update
     */
    where?: Generation_SINWhereInput
    /**
     * Limit how many Generation_SINS to update.
     */
    limit?: number
  }

  /**
   * Generation_SIN upsert
   */
  export type Generation_SINUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * The filter to search for the Generation_SIN to update in case it exists.
     */
    where: Generation_SINWhereUniqueInput
    /**
     * In case the Generation_SIN found by the `where` argument doesn't exist, create a new Generation_SIN with this data.
     */
    create: XOR<Generation_SINCreateInput, Generation_SINUncheckedCreateInput>
    /**
     * In case the Generation_SIN was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Generation_SINUpdateInput, Generation_SINUncheckedUpdateInput>
  }

  /**
   * Generation_SIN delete
   */
  export type Generation_SINDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
    /**
     * Filter which Generation_SIN to delete.
     */
    where: Generation_SINWhereUniqueInput
  }

  /**
   * Generation_SIN deleteMany
   */
  export type Generation_SINDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_SINS to delete
     */
    where?: Generation_SINWhereInput
    /**
     * Limit how many Generation_SINS to delete.
     */
    limit?: number
  }

  /**
   * Generation_SIN without action
   */
  export type Generation_SINDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_SIN
     */
    select?: Generation_SINSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_SIN
     */
    omit?: Generation_SINOmit<ExtArgs> | null
  }


  /**
   * Model Generation_Norte
   */

  export type AggregateGeneration_Norte = {
    _count: Generation_NorteCountAggregateOutputType | null
    _avg: Generation_NorteAvgAggregateOutputType | null
    _sum: Generation_NorteSumAggregateOutputType | null
    _min: Generation_NorteMinAggregateOutputType | null
    _max: Generation_NorteMaxAggregateOutputType | null
  }

  export type Generation_NorteAvgAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NorteSumAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NorteMinAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NorteMaxAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NorteCountAggregateOutputType = {
    id: number
    instant: number
    instantDate: number
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _all: number
  }


  export type Generation_NorteAvgAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NorteSumAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NorteMinAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NorteMaxAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NorteCountAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
    _all?: true
  }

  export type Generation_NorteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_Norte to aggregate.
     */
    where?: Generation_NorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nortes to fetch.
     */
    orderBy?: Generation_NorteOrderByWithRelationInput | Generation_NorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Generation_NorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nortes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generation_Nortes
    **/
    _count?: true | Generation_NorteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Generation_NorteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Generation_NorteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Generation_NorteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Generation_NorteMaxAggregateInputType
  }

  export type GetGeneration_NorteAggregateType<T extends Generation_NorteAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneration_Norte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneration_Norte[P]>
      : GetScalarType<T[P], AggregateGeneration_Norte[P]>
  }




  export type Generation_NorteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Generation_NorteWhereInput
    orderBy?: Generation_NorteOrderByWithAggregationInput | Generation_NorteOrderByWithAggregationInput[]
    by: Generation_NorteScalarFieldEnum[] | Generation_NorteScalarFieldEnum
    having?: Generation_NorteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Generation_NorteCountAggregateInputType | true
    _avg?: Generation_NorteAvgAggregateInputType
    _sum?: Generation_NorteSumAggregateInputType
    _min?: Generation_NorteMinAggregateInputType
    _max?: Generation_NorteMaxAggregateInputType
  }

  export type Generation_NorteGroupByOutputType = {
    id: number
    instant: string
    instantDate: Date
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _count: Generation_NorteCountAggregateOutputType | null
    _avg: Generation_NorteAvgAggregateOutputType | null
    _sum: Generation_NorteSumAggregateOutputType | null
    _min: Generation_NorteMinAggregateOutputType | null
    _max: Generation_NorteMaxAggregateOutputType | null
  }

  type GetGeneration_NorteGroupByPayload<T extends Generation_NorteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Generation_NorteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Generation_NorteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Generation_NorteGroupByOutputType[P]>
            : GetScalarType<T[P], Generation_NorteGroupByOutputType[P]>
        }
      >
    >


  export type Generation_NorteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Norte"]>

  export type Generation_NorteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Norte"]>

  export type Generation_NorteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Norte"]>

  export type Generation_NorteSelectScalar = {
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }

  export type Generation_NorteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instant" | "instantDate" | "hydro" | "nuclear" | "solar" | "thermal" | "wind", ExtArgs["result"]["generation_Norte"]>

  export type $Generation_NortePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generation_Norte"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instant: string
      instantDate: Date
      hydro: number
      nuclear: number
      solar: number
      thermal: number
      wind: number
    }, ExtArgs["result"]["generation_Norte"]>
    composites: {}
  }

  type Generation_NorteGetPayload<S extends boolean | null | undefined | Generation_NorteDefaultArgs> = $Result.GetResult<Prisma.$Generation_NortePayload, S>

  type Generation_NorteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Generation_NorteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Generation_NorteCountAggregateInputType | true
    }

  export interface Generation_NorteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generation_Norte'], meta: { name: 'Generation_Norte' } }
    /**
     * Find zero or one Generation_Norte that matches the filter.
     * @param {Generation_NorteFindUniqueArgs} args - Arguments to find a Generation_Norte
     * @example
     * // Get one Generation_Norte
     * const generation_Norte = await prisma.generation_Norte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Generation_NorteFindUniqueArgs>(args: SelectSubset<T, Generation_NorteFindUniqueArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generation_Norte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Generation_NorteFindUniqueOrThrowArgs} args - Arguments to find a Generation_Norte
     * @example
     * // Get one Generation_Norte
     * const generation_Norte = await prisma.generation_Norte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Generation_NorteFindUniqueOrThrowArgs>(args: SelectSubset<T, Generation_NorteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_Norte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NorteFindFirstArgs} args - Arguments to find a Generation_Norte
     * @example
     * // Get one Generation_Norte
     * const generation_Norte = await prisma.generation_Norte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Generation_NorteFindFirstArgs>(args?: SelectSubset<T, Generation_NorteFindFirstArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_Norte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NorteFindFirstOrThrowArgs} args - Arguments to find a Generation_Norte
     * @example
     * // Get one Generation_Norte
     * const generation_Norte = await prisma.generation_Norte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Generation_NorteFindFirstOrThrowArgs>(args?: SelectSubset<T, Generation_NorteFindFirstOrThrowArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generation_Nortes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NorteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generation_Nortes
     * const generation_Nortes = await prisma.generation_Norte.findMany()
     * 
     * // Get first 10 Generation_Nortes
     * const generation_Nortes = await prisma.generation_Norte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generation_NorteWithIdOnly = await prisma.generation_Norte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Generation_NorteFindManyArgs>(args?: SelectSubset<T, Generation_NorteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generation_Norte.
     * @param {Generation_NorteCreateArgs} args - Arguments to create a Generation_Norte.
     * @example
     * // Create one Generation_Norte
     * const Generation_Norte = await prisma.generation_Norte.create({
     *   data: {
     *     // ... data to create a Generation_Norte
     *   }
     * })
     * 
     */
    create<T extends Generation_NorteCreateArgs>(args: SelectSubset<T, Generation_NorteCreateArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generation_Nortes.
     * @param {Generation_NorteCreateManyArgs} args - Arguments to create many Generation_Nortes.
     * @example
     * // Create many Generation_Nortes
     * const generation_Norte = await prisma.generation_Norte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Generation_NorteCreateManyArgs>(args?: SelectSubset<T, Generation_NorteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generation_Nortes and returns the data saved in the database.
     * @param {Generation_NorteCreateManyAndReturnArgs} args - Arguments to create many Generation_Nortes.
     * @example
     * // Create many Generation_Nortes
     * const generation_Norte = await prisma.generation_Norte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generation_Nortes and only return the `id`
     * const generation_NorteWithIdOnly = await prisma.generation_Norte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Generation_NorteCreateManyAndReturnArgs>(args?: SelectSubset<T, Generation_NorteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generation_Norte.
     * @param {Generation_NorteDeleteArgs} args - Arguments to delete one Generation_Norte.
     * @example
     * // Delete one Generation_Norte
     * const Generation_Norte = await prisma.generation_Norte.delete({
     *   where: {
     *     // ... filter to delete one Generation_Norte
     *   }
     * })
     * 
     */
    delete<T extends Generation_NorteDeleteArgs>(args: SelectSubset<T, Generation_NorteDeleteArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generation_Norte.
     * @param {Generation_NorteUpdateArgs} args - Arguments to update one Generation_Norte.
     * @example
     * // Update one Generation_Norte
     * const generation_Norte = await prisma.generation_Norte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Generation_NorteUpdateArgs>(args: SelectSubset<T, Generation_NorteUpdateArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generation_Nortes.
     * @param {Generation_NorteDeleteManyArgs} args - Arguments to filter Generation_Nortes to delete.
     * @example
     * // Delete a few Generation_Nortes
     * const { count } = await prisma.generation_Norte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Generation_NorteDeleteManyArgs>(args?: SelectSubset<T, Generation_NorteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_Nortes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NorteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generation_Nortes
     * const generation_Norte = await prisma.generation_Norte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Generation_NorteUpdateManyArgs>(args: SelectSubset<T, Generation_NorteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_Nortes and returns the data updated in the database.
     * @param {Generation_NorteUpdateManyAndReturnArgs} args - Arguments to update many Generation_Nortes.
     * @example
     * // Update many Generation_Nortes
     * const generation_Norte = await prisma.generation_Norte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generation_Nortes and only return the `id`
     * const generation_NorteWithIdOnly = await prisma.generation_Norte.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Generation_NorteUpdateManyAndReturnArgs>(args: SelectSubset<T, Generation_NorteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generation_Norte.
     * @param {Generation_NorteUpsertArgs} args - Arguments to update or create a Generation_Norte.
     * @example
     * // Update or create a Generation_Norte
     * const generation_Norte = await prisma.generation_Norte.upsert({
     *   create: {
     *     // ... data to create a Generation_Norte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generation_Norte we want to update
     *   }
     * })
     */
    upsert<T extends Generation_NorteUpsertArgs>(args: SelectSubset<T, Generation_NorteUpsertArgs<ExtArgs>>): Prisma__Generation_NorteClient<$Result.GetResult<Prisma.$Generation_NortePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generation_Nortes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NorteCountArgs} args - Arguments to filter Generation_Nortes to count.
     * @example
     * // Count the number of Generation_Nortes
     * const count = await prisma.generation_Norte.count({
     *   where: {
     *     // ... the filter for the Generation_Nortes we want to count
     *   }
     * })
    **/
    count<T extends Generation_NorteCountArgs>(
      args?: Subset<T, Generation_NorteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Generation_NorteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generation_Norte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NorteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Generation_NorteAggregateArgs>(args: Subset<T, Generation_NorteAggregateArgs>): Prisma.PrismaPromise<GetGeneration_NorteAggregateType<T>>

    /**
     * Group by Generation_Norte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NorteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Generation_NorteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Generation_NorteGroupByArgs['orderBy'] }
        : { orderBy?: Generation_NorteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Generation_NorteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneration_NorteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generation_Norte model
   */
  readonly fields: Generation_NorteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generation_Norte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Generation_NorteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Generation_Norte model
   */
  interface Generation_NorteFieldRefs {
    readonly id: FieldRef<"Generation_Norte", 'Int'>
    readonly instant: FieldRef<"Generation_Norte", 'String'>
    readonly instantDate: FieldRef<"Generation_Norte", 'DateTime'>
    readonly hydro: FieldRef<"Generation_Norte", 'Float'>
    readonly nuclear: FieldRef<"Generation_Norte", 'Float'>
    readonly solar: FieldRef<"Generation_Norte", 'Float'>
    readonly thermal: FieldRef<"Generation_Norte", 'Float'>
    readonly wind: FieldRef<"Generation_Norte", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Generation_Norte findUnique
   */
  export type Generation_NorteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Norte to fetch.
     */
    where: Generation_NorteWhereUniqueInput
  }

  /**
   * Generation_Norte findUniqueOrThrow
   */
  export type Generation_NorteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Norte to fetch.
     */
    where: Generation_NorteWhereUniqueInput
  }

  /**
   * Generation_Norte findFirst
   */
  export type Generation_NorteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Norte to fetch.
     */
    where?: Generation_NorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nortes to fetch.
     */
    orderBy?: Generation_NorteOrderByWithRelationInput | Generation_NorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_Nortes.
     */
    cursor?: Generation_NorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nortes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_Nortes.
     */
    distinct?: Generation_NorteScalarFieldEnum | Generation_NorteScalarFieldEnum[]
  }

  /**
   * Generation_Norte findFirstOrThrow
   */
  export type Generation_NorteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Norte to fetch.
     */
    where?: Generation_NorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nortes to fetch.
     */
    orderBy?: Generation_NorteOrderByWithRelationInput | Generation_NorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_Nortes.
     */
    cursor?: Generation_NorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nortes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_Nortes.
     */
    distinct?: Generation_NorteScalarFieldEnum | Generation_NorteScalarFieldEnum[]
  }

  /**
   * Generation_Norte findMany
   */
  export type Generation_NorteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Nortes to fetch.
     */
    where?: Generation_NorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nortes to fetch.
     */
    orderBy?: Generation_NorteOrderByWithRelationInput | Generation_NorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generation_Nortes.
     */
    cursor?: Generation_NorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nortes.
     */
    skip?: number
    distinct?: Generation_NorteScalarFieldEnum | Generation_NorteScalarFieldEnum[]
  }

  /**
   * Generation_Norte create
   */
  export type Generation_NorteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * The data needed to create a Generation_Norte.
     */
    data: XOR<Generation_NorteCreateInput, Generation_NorteUncheckedCreateInput>
  }

  /**
   * Generation_Norte createMany
   */
  export type Generation_NorteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generation_Nortes.
     */
    data: Generation_NorteCreateManyInput | Generation_NorteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_Norte createManyAndReturn
   */
  export type Generation_NorteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * The data used to create many Generation_Nortes.
     */
    data: Generation_NorteCreateManyInput | Generation_NorteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_Norte update
   */
  export type Generation_NorteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * The data needed to update a Generation_Norte.
     */
    data: XOR<Generation_NorteUpdateInput, Generation_NorteUncheckedUpdateInput>
    /**
     * Choose, which Generation_Norte to update.
     */
    where: Generation_NorteWhereUniqueInput
  }

  /**
   * Generation_Norte updateMany
   */
  export type Generation_NorteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generation_Nortes.
     */
    data: XOR<Generation_NorteUpdateManyMutationInput, Generation_NorteUncheckedUpdateManyInput>
    /**
     * Filter which Generation_Nortes to update
     */
    where?: Generation_NorteWhereInput
    /**
     * Limit how many Generation_Nortes to update.
     */
    limit?: number
  }

  /**
   * Generation_Norte updateManyAndReturn
   */
  export type Generation_NorteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * The data used to update Generation_Nortes.
     */
    data: XOR<Generation_NorteUpdateManyMutationInput, Generation_NorteUncheckedUpdateManyInput>
    /**
     * Filter which Generation_Nortes to update
     */
    where?: Generation_NorteWhereInput
    /**
     * Limit how many Generation_Nortes to update.
     */
    limit?: number
  }

  /**
   * Generation_Norte upsert
   */
  export type Generation_NorteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * The filter to search for the Generation_Norte to update in case it exists.
     */
    where: Generation_NorteWhereUniqueInput
    /**
     * In case the Generation_Norte found by the `where` argument doesn't exist, create a new Generation_Norte with this data.
     */
    create: XOR<Generation_NorteCreateInput, Generation_NorteUncheckedCreateInput>
    /**
     * In case the Generation_Norte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Generation_NorteUpdateInput, Generation_NorteUncheckedUpdateInput>
  }

  /**
   * Generation_Norte delete
   */
  export type Generation_NorteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
    /**
     * Filter which Generation_Norte to delete.
     */
    where: Generation_NorteWhereUniqueInput
  }

  /**
   * Generation_Norte deleteMany
   */
  export type Generation_NorteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_Nortes to delete
     */
    where?: Generation_NorteWhereInput
    /**
     * Limit how many Generation_Nortes to delete.
     */
    limit?: number
  }

  /**
   * Generation_Norte without action
   */
  export type Generation_NorteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Norte
     */
    select?: Generation_NorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Norte
     */
    omit?: Generation_NorteOmit<ExtArgs> | null
  }


  /**
   * Model Generation_Sul
   */

  export type AggregateGeneration_Sul = {
    _count: Generation_SulCountAggregateOutputType | null
    _avg: Generation_SulAvgAggregateOutputType | null
    _sum: Generation_SulSumAggregateOutputType | null
    _min: Generation_SulMinAggregateOutputType | null
    _max: Generation_SulMaxAggregateOutputType | null
  }

  export type Generation_SulAvgAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SulSumAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SulMinAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SulMaxAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_SulCountAggregateOutputType = {
    id: number
    instant: number
    instantDate: number
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _all: number
  }


  export type Generation_SulAvgAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SulSumAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SulMinAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SulMaxAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_SulCountAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
    _all?: true
  }

  export type Generation_SulAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_Sul to aggregate.
     */
    where?: Generation_SulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Suls to fetch.
     */
    orderBy?: Generation_SulOrderByWithRelationInput | Generation_SulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Generation_SulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Suls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Suls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generation_Suls
    **/
    _count?: true | Generation_SulCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Generation_SulAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Generation_SulSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Generation_SulMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Generation_SulMaxAggregateInputType
  }

  export type GetGeneration_SulAggregateType<T extends Generation_SulAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneration_Sul]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneration_Sul[P]>
      : GetScalarType<T[P], AggregateGeneration_Sul[P]>
  }




  export type Generation_SulGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Generation_SulWhereInput
    orderBy?: Generation_SulOrderByWithAggregationInput | Generation_SulOrderByWithAggregationInput[]
    by: Generation_SulScalarFieldEnum[] | Generation_SulScalarFieldEnum
    having?: Generation_SulScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Generation_SulCountAggregateInputType | true
    _avg?: Generation_SulAvgAggregateInputType
    _sum?: Generation_SulSumAggregateInputType
    _min?: Generation_SulMinAggregateInputType
    _max?: Generation_SulMaxAggregateInputType
  }

  export type Generation_SulGroupByOutputType = {
    id: number
    instant: string
    instantDate: Date
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _count: Generation_SulCountAggregateOutputType | null
    _avg: Generation_SulAvgAggregateOutputType | null
    _sum: Generation_SulSumAggregateOutputType | null
    _min: Generation_SulMinAggregateOutputType | null
    _max: Generation_SulMaxAggregateOutputType | null
  }

  type GetGeneration_SulGroupByPayload<T extends Generation_SulGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Generation_SulGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Generation_SulGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Generation_SulGroupByOutputType[P]>
            : GetScalarType<T[P], Generation_SulGroupByOutputType[P]>
        }
      >
    >


  export type Generation_SulSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Sul"]>

  export type Generation_SulSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Sul"]>

  export type Generation_SulSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Sul"]>

  export type Generation_SulSelectScalar = {
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }

  export type Generation_SulOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instant" | "instantDate" | "hydro" | "nuclear" | "solar" | "thermal" | "wind", ExtArgs["result"]["generation_Sul"]>

  export type $Generation_SulPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generation_Sul"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instant: string
      instantDate: Date
      hydro: number
      nuclear: number
      solar: number
      thermal: number
      wind: number
    }, ExtArgs["result"]["generation_Sul"]>
    composites: {}
  }

  type Generation_SulGetPayload<S extends boolean | null | undefined | Generation_SulDefaultArgs> = $Result.GetResult<Prisma.$Generation_SulPayload, S>

  type Generation_SulCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Generation_SulFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Generation_SulCountAggregateInputType | true
    }

  export interface Generation_SulDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generation_Sul'], meta: { name: 'Generation_Sul' } }
    /**
     * Find zero or one Generation_Sul that matches the filter.
     * @param {Generation_SulFindUniqueArgs} args - Arguments to find a Generation_Sul
     * @example
     * // Get one Generation_Sul
     * const generation_Sul = await prisma.generation_Sul.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Generation_SulFindUniqueArgs>(args: SelectSubset<T, Generation_SulFindUniqueArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generation_Sul that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Generation_SulFindUniqueOrThrowArgs} args - Arguments to find a Generation_Sul
     * @example
     * // Get one Generation_Sul
     * const generation_Sul = await prisma.generation_Sul.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Generation_SulFindUniqueOrThrowArgs>(args: SelectSubset<T, Generation_SulFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_Sul that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SulFindFirstArgs} args - Arguments to find a Generation_Sul
     * @example
     * // Get one Generation_Sul
     * const generation_Sul = await prisma.generation_Sul.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Generation_SulFindFirstArgs>(args?: SelectSubset<T, Generation_SulFindFirstArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_Sul that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SulFindFirstOrThrowArgs} args - Arguments to find a Generation_Sul
     * @example
     * // Get one Generation_Sul
     * const generation_Sul = await prisma.generation_Sul.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Generation_SulFindFirstOrThrowArgs>(args?: SelectSubset<T, Generation_SulFindFirstOrThrowArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generation_Suls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SulFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generation_Suls
     * const generation_Suls = await prisma.generation_Sul.findMany()
     * 
     * // Get first 10 Generation_Suls
     * const generation_Suls = await prisma.generation_Sul.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generation_SulWithIdOnly = await prisma.generation_Sul.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Generation_SulFindManyArgs>(args?: SelectSubset<T, Generation_SulFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generation_Sul.
     * @param {Generation_SulCreateArgs} args - Arguments to create a Generation_Sul.
     * @example
     * // Create one Generation_Sul
     * const Generation_Sul = await prisma.generation_Sul.create({
     *   data: {
     *     // ... data to create a Generation_Sul
     *   }
     * })
     * 
     */
    create<T extends Generation_SulCreateArgs>(args: SelectSubset<T, Generation_SulCreateArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generation_Suls.
     * @param {Generation_SulCreateManyArgs} args - Arguments to create many Generation_Suls.
     * @example
     * // Create many Generation_Suls
     * const generation_Sul = await prisma.generation_Sul.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Generation_SulCreateManyArgs>(args?: SelectSubset<T, Generation_SulCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generation_Suls and returns the data saved in the database.
     * @param {Generation_SulCreateManyAndReturnArgs} args - Arguments to create many Generation_Suls.
     * @example
     * // Create many Generation_Suls
     * const generation_Sul = await prisma.generation_Sul.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generation_Suls and only return the `id`
     * const generation_SulWithIdOnly = await prisma.generation_Sul.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Generation_SulCreateManyAndReturnArgs>(args?: SelectSubset<T, Generation_SulCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generation_Sul.
     * @param {Generation_SulDeleteArgs} args - Arguments to delete one Generation_Sul.
     * @example
     * // Delete one Generation_Sul
     * const Generation_Sul = await prisma.generation_Sul.delete({
     *   where: {
     *     // ... filter to delete one Generation_Sul
     *   }
     * })
     * 
     */
    delete<T extends Generation_SulDeleteArgs>(args: SelectSubset<T, Generation_SulDeleteArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generation_Sul.
     * @param {Generation_SulUpdateArgs} args - Arguments to update one Generation_Sul.
     * @example
     * // Update one Generation_Sul
     * const generation_Sul = await prisma.generation_Sul.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Generation_SulUpdateArgs>(args: SelectSubset<T, Generation_SulUpdateArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generation_Suls.
     * @param {Generation_SulDeleteManyArgs} args - Arguments to filter Generation_Suls to delete.
     * @example
     * // Delete a few Generation_Suls
     * const { count } = await prisma.generation_Sul.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Generation_SulDeleteManyArgs>(args?: SelectSubset<T, Generation_SulDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_Suls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SulUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generation_Suls
     * const generation_Sul = await prisma.generation_Sul.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Generation_SulUpdateManyArgs>(args: SelectSubset<T, Generation_SulUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_Suls and returns the data updated in the database.
     * @param {Generation_SulUpdateManyAndReturnArgs} args - Arguments to update many Generation_Suls.
     * @example
     * // Update many Generation_Suls
     * const generation_Sul = await prisma.generation_Sul.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generation_Suls and only return the `id`
     * const generation_SulWithIdOnly = await prisma.generation_Sul.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Generation_SulUpdateManyAndReturnArgs>(args: SelectSubset<T, Generation_SulUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generation_Sul.
     * @param {Generation_SulUpsertArgs} args - Arguments to update or create a Generation_Sul.
     * @example
     * // Update or create a Generation_Sul
     * const generation_Sul = await prisma.generation_Sul.upsert({
     *   create: {
     *     // ... data to create a Generation_Sul
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generation_Sul we want to update
     *   }
     * })
     */
    upsert<T extends Generation_SulUpsertArgs>(args: SelectSubset<T, Generation_SulUpsertArgs<ExtArgs>>): Prisma__Generation_SulClient<$Result.GetResult<Prisma.$Generation_SulPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generation_Suls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SulCountArgs} args - Arguments to filter Generation_Suls to count.
     * @example
     * // Count the number of Generation_Suls
     * const count = await prisma.generation_Sul.count({
     *   where: {
     *     // ... the filter for the Generation_Suls we want to count
     *   }
     * })
    **/
    count<T extends Generation_SulCountArgs>(
      args?: Subset<T, Generation_SulCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Generation_SulCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generation_Sul.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SulAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Generation_SulAggregateArgs>(args: Subset<T, Generation_SulAggregateArgs>): Prisma.PrismaPromise<GetGeneration_SulAggregateType<T>>

    /**
     * Group by Generation_Sul.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_SulGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Generation_SulGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Generation_SulGroupByArgs['orderBy'] }
        : { orderBy?: Generation_SulGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Generation_SulGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneration_SulGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generation_Sul model
   */
  readonly fields: Generation_SulFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generation_Sul.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Generation_SulClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Generation_Sul model
   */
  interface Generation_SulFieldRefs {
    readonly id: FieldRef<"Generation_Sul", 'Int'>
    readonly instant: FieldRef<"Generation_Sul", 'String'>
    readonly instantDate: FieldRef<"Generation_Sul", 'DateTime'>
    readonly hydro: FieldRef<"Generation_Sul", 'Float'>
    readonly nuclear: FieldRef<"Generation_Sul", 'Float'>
    readonly solar: FieldRef<"Generation_Sul", 'Float'>
    readonly thermal: FieldRef<"Generation_Sul", 'Float'>
    readonly wind: FieldRef<"Generation_Sul", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Generation_Sul findUnique
   */
  export type Generation_SulFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Sul to fetch.
     */
    where: Generation_SulWhereUniqueInput
  }

  /**
   * Generation_Sul findUniqueOrThrow
   */
  export type Generation_SulFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Sul to fetch.
     */
    where: Generation_SulWhereUniqueInput
  }

  /**
   * Generation_Sul findFirst
   */
  export type Generation_SulFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Sul to fetch.
     */
    where?: Generation_SulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Suls to fetch.
     */
    orderBy?: Generation_SulOrderByWithRelationInput | Generation_SulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_Suls.
     */
    cursor?: Generation_SulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Suls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Suls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_Suls.
     */
    distinct?: Generation_SulScalarFieldEnum | Generation_SulScalarFieldEnum[]
  }

  /**
   * Generation_Sul findFirstOrThrow
   */
  export type Generation_SulFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Sul to fetch.
     */
    where?: Generation_SulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Suls to fetch.
     */
    orderBy?: Generation_SulOrderByWithRelationInput | Generation_SulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_Suls.
     */
    cursor?: Generation_SulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Suls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Suls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_Suls.
     */
    distinct?: Generation_SulScalarFieldEnum | Generation_SulScalarFieldEnum[]
  }

  /**
   * Generation_Sul findMany
   */
  export type Generation_SulFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Suls to fetch.
     */
    where?: Generation_SulWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Suls to fetch.
     */
    orderBy?: Generation_SulOrderByWithRelationInput | Generation_SulOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generation_Suls.
     */
    cursor?: Generation_SulWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Suls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Suls.
     */
    skip?: number
    distinct?: Generation_SulScalarFieldEnum | Generation_SulScalarFieldEnum[]
  }

  /**
   * Generation_Sul create
   */
  export type Generation_SulCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * The data needed to create a Generation_Sul.
     */
    data: XOR<Generation_SulCreateInput, Generation_SulUncheckedCreateInput>
  }

  /**
   * Generation_Sul createMany
   */
  export type Generation_SulCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generation_Suls.
     */
    data: Generation_SulCreateManyInput | Generation_SulCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_Sul createManyAndReturn
   */
  export type Generation_SulCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * The data used to create many Generation_Suls.
     */
    data: Generation_SulCreateManyInput | Generation_SulCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_Sul update
   */
  export type Generation_SulUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * The data needed to update a Generation_Sul.
     */
    data: XOR<Generation_SulUpdateInput, Generation_SulUncheckedUpdateInput>
    /**
     * Choose, which Generation_Sul to update.
     */
    where: Generation_SulWhereUniqueInput
  }

  /**
   * Generation_Sul updateMany
   */
  export type Generation_SulUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generation_Suls.
     */
    data: XOR<Generation_SulUpdateManyMutationInput, Generation_SulUncheckedUpdateManyInput>
    /**
     * Filter which Generation_Suls to update
     */
    where?: Generation_SulWhereInput
    /**
     * Limit how many Generation_Suls to update.
     */
    limit?: number
  }

  /**
   * Generation_Sul updateManyAndReturn
   */
  export type Generation_SulUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * The data used to update Generation_Suls.
     */
    data: XOR<Generation_SulUpdateManyMutationInput, Generation_SulUncheckedUpdateManyInput>
    /**
     * Filter which Generation_Suls to update
     */
    where?: Generation_SulWhereInput
    /**
     * Limit how many Generation_Suls to update.
     */
    limit?: number
  }

  /**
   * Generation_Sul upsert
   */
  export type Generation_SulUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * The filter to search for the Generation_Sul to update in case it exists.
     */
    where: Generation_SulWhereUniqueInput
    /**
     * In case the Generation_Sul found by the `where` argument doesn't exist, create a new Generation_Sul with this data.
     */
    create: XOR<Generation_SulCreateInput, Generation_SulUncheckedCreateInput>
    /**
     * In case the Generation_Sul was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Generation_SulUpdateInput, Generation_SulUncheckedUpdateInput>
  }

  /**
   * Generation_Sul delete
   */
  export type Generation_SulDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
    /**
     * Filter which Generation_Sul to delete.
     */
    where: Generation_SulWhereUniqueInput
  }

  /**
   * Generation_Sul deleteMany
   */
  export type Generation_SulDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_Suls to delete
     */
    where?: Generation_SulWhereInput
    /**
     * Limit how many Generation_Suls to delete.
     */
    limit?: number
  }

  /**
   * Generation_Sul without action
   */
  export type Generation_SulDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Sul
     */
    select?: Generation_SulSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Sul
     */
    omit?: Generation_SulOmit<ExtArgs> | null
  }


  /**
   * Model Generation_Nordeste
   */

  export type AggregateGeneration_Nordeste = {
    _count: Generation_NordesteCountAggregateOutputType | null
    _avg: Generation_NordesteAvgAggregateOutputType | null
    _sum: Generation_NordesteSumAggregateOutputType | null
    _min: Generation_NordesteMinAggregateOutputType | null
    _max: Generation_NordesteMaxAggregateOutputType | null
  }

  export type Generation_NordesteAvgAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NordesteSumAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NordesteMinAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NordesteMaxAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_NordesteCountAggregateOutputType = {
    id: number
    instant: number
    instantDate: number
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _all: number
  }


  export type Generation_NordesteAvgAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NordesteSumAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NordesteMinAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NordesteMaxAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_NordesteCountAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
    _all?: true
  }

  export type Generation_NordesteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_Nordeste to aggregate.
     */
    where?: Generation_NordesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nordestes to fetch.
     */
    orderBy?: Generation_NordesteOrderByWithRelationInput | Generation_NordesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Generation_NordesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nordestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nordestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generation_Nordestes
    **/
    _count?: true | Generation_NordesteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Generation_NordesteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Generation_NordesteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Generation_NordesteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Generation_NordesteMaxAggregateInputType
  }

  export type GetGeneration_NordesteAggregateType<T extends Generation_NordesteAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneration_Nordeste]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneration_Nordeste[P]>
      : GetScalarType<T[P], AggregateGeneration_Nordeste[P]>
  }




  export type Generation_NordesteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Generation_NordesteWhereInput
    orderBy?: Generation_NordesteOrderByWithAggregationInput | Generation_NordesteOrderByWithAggregationInput[]
    by: Generation_NordesteScalarFieldEnum[] | Generation_NordesteScalarFieldEnum
    having?: Generation_NordesteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Generation_NordesteCountAggregateInputType | true
    _avg?: Generation_NordesteAvgAggregateInputType
    _sum?: Generation_NordesteSumAggregateInputType
    _min?: Generation_NordesteMinAggregateInputType
    _max?: Generation_NordesteMaxAggregateInputType
  }

  export type Generation_NordesteGroupByOutputType = {
    id: number
    instant: string
    instantDate: Date
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _count: Generation_NordesteCountAggregateOutputType | null
    _avg: Generation_NordesteAvgAggregateOutputType | null
    _sum: Generation_NordesteSumAggregateOutputType | null
    _min: Generation_NordesteMinAggregateOutputType | null
    _max: Generation_NordesteMaxAggregateOutputType | null
  }

  type GetGeneration_NordesteGroupByPayload<T extends Generation_NordesteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Generation_NordesteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Generation_NordesteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Generation_NordesteGroupByOutputType[P]>
            : GetScalarType<T[P], Generation_NordesteGroupByOutputType[P]>
        }
      >
    >


  export type Generation_NordesteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Nordeste"]>

  export type Generation_NordesteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Nordeste"]>

  export type Generation_NordesteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_Nordeste"]>

  export type Generation_NordesteSelectScalar = {
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }

  export type Generation_NordesteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instant" | "instantDate" | "hydro" | "nuclear" | "solar" | "thermal" | "wind", ExtArgs["result"]["generation_Nordeste"]>

  export type $Generation_NordestePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generation_Nordeste"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instant: string
      instantDate: Date
      hydro: number
      nuclear: number
      solar: number
      thermal: number
      wind: number
    }, ExtArgs["result"]["generation_Nordeste"]>
    composites: {}
  }

  type Generation_NordesteGetPayload<S extends boolean | null | undefined | Generation_NordesteDefaultArgs> = $Result.GetResult<Prisma.$Generation_NordestePayload, S>

  type Generation_NordesteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Generation_NordesteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Generation_NordesteCountAggregateInputType | true
    }

  export interface Generation_NordesteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generation_Nordeste'], meta: { name: 'Generation_Nordeste' } }
    /**
     * Find zero or one Generation_Nordeste that matches the filter.
     * @param {Generation_NordesteFindUniqueArgs} args - Arguments to find a Generation_Nordeste
     * @example
     * // Get one Generation_Nordeste
     * const generation_Nordeste = await prisma.generation_Nordeste.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Generation_NordesteFindUniqueArgs>(args: SelectSubset<T, Generation_NordesteFindUniqueArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generation_Nordeste that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Generation_NordesteFindUniqueOrThrowArgs} args - Arguments to find a Generation_Nordeste
     * @example
     * // Get one Generation_Nordeste
     * const generation_Nordeste = await prisma.generation_Nordeste.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Generation_NordesteFindUniqueOrThrowArgs>(args: SelectSubset<T, Generation_NordesteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_Nordeste that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NordesteFindFirstArgs} args - Arguments to find a Generation_Nordeste
     * @example
     * // Get one Generation_Nordeste
     * const generation_Nordeste = await prisma.generation_Nordeste.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Generation_NordesteFindFirstArgs>(args?: SelectSubset<T, Generation_NordesteFindFirstArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_Nordeste that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NordesteFindFirstOrThrowArgs} args - Arguments to find a Generation_Nordeste
     * @example
     * // Get one Generation_Nordeste
     * const generation_Nordeste = await prisma.generation_Nordeste.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Generation_NordesteFindFirstOrThrowArgs>(args?: SelectSubset<T, Generation_NordesteFindFirstOrThrowArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generation_Nordestes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NordesteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generation_Nordestes
     * const generation_Nordestes = await prisma.generation_Nordeste.findMany()
     * 
     * // Get first 10 Generation_Nordestes
     * const generation_Nordestes = await prisma.generation_Nordeste.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generation_NordesteWithIdOnly = await prisma.generation_Nordeste.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Generation_NordesteFindManyArgs>(args?: SelectSubset<T, Generation_NordesteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generation_Nordeste.
     * @param {Generation_NordesteCreateArgs} args - Arguments to create a Generation_Nordeste.
     * @example
     * // Create one Generation_Nordeste
     * const Generation_Nordeste = await prisma.generation_Nordeste.create({
     *   data: {
     *     // ... data to create a Generation_Nordeste
     *   }
     * })
     * 
     */
    create<T extends Generation_NordesteCreateArgs>(args: SelectSubset<T, Generation_NordesteCreateArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generation_Nordestes.
     * @param {Generation_NordesteCreateManyArgs} args - Arguments to create many Generation_Nordestes.
     * @example
     * // Create many Generation_Nordestes
     * const generation_Nordeste = await prisma.generation_Nordeste.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Generation_NordesteCreateManyArgs>(args?: SelectSubset<T, Generation_NordesteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generation_Nordestes and returns the data saved in the database.
     * @param {Generation_NordesteCreateManyAndReturnArgs} args - Arguments to create many Generation_Nordestes.
     * @example
     * // Create many Generation_Nordestes
     * const generation_Nordeste = await prisma.generation_Nordeste.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generation_Nordestes and only return the `id`
     * const generation_NordesteWithIdOnly = await prisma.generation_Nordeste.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Generation_NordesteCreateManyAndReturnArgs>(args?: SelectSubset<T, Generation_NordesteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generation_Nordeste.
     * @param {Generation_NordesteDeleteArgs} args - Arguments to delete one Generation_Nordeste.
     * @example
     * // Delete one Generation_Nordeste
     * const Generation_Nordeste = await prisma.generation_Nordeste.delete({
     *   where: {
     *     // ... filter to delete one Generation_Nordeste
     *   }
     * })
     * 
     */
    delete<T extends Generation_NordesteDeleteArgs>(args: SelectSubset<T, Generation_NordesteDeleteArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generation_Nordeste.
     * @param {Generation_NordesteUpdateArgs} args - Arguments to update one Generation_Nordeste.
     * @example
     * // Update one Generation_Nordeste
     * const generation_Nordeste = await prisma.generation_Nordeste.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Generation_NordesteUpdateArgs>(args: SelectSubset<T, Generation_NordesteUpdateArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generation_Nordestes.
     * @param {Generation_NordesteDeleteManyArgs} args - Arguments to filter Generation_Nordestes to delete.
     * @example
     * // Delete a few Generation_Nordestes
     * const { count } = await prisma.generation_Nordeste.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Generation_NordesteDeleteManyArgs>(args?: SelectSubset<T, Generation_NordesteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_Nordestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NordesteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generation_Nordestes
     * const generation_Nordeste = await prisma.generation_Nordeste.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Generation_NordesteUpdateManyArgs>(args: SelectSubset<T, Generation_NordesteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_Nordestes and returns the data updated in the database.
     * @param {Generation_NordesteUpdateManyAndReturnArgs} args - Arguments to update many Generation_Nordestes.
     * @example
     * // Update many Generation_Nordestes
     * const generation_Nordeste = await prisma.generation_Nordeste.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generation_Nordestes and only return the `id`
     * const generation_NordesteWithIdOnly = await prisma.generation_Nordeste.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Generation_NordesteUpdateManyAndReturnArgs>(args: SelectSubset<T, Generation_NordesteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generation_Nordeste.
     * @param {Generation_NordesteUpsertArgs} args - Arguments to update or create a Generation_Nordeste.
     * @example
     * // Update or create a Generation_Nordeste
     * const generation_Nordeste = await prisma.generation_Nordeste.upsert({
     *   create: {
     *     // ... data to create a Generation_Nordeste
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generation_Nordeste we want to update
     *   }
     * })
     */
    upsert<T extends Generation_NordesteUpsertArgs>(args: SelectSubset<T, Generation_NordesteUpsertArgs<ExtArgs>>): Prisma__Generation_NordesteClient<$Result.GetResult<Prisma.$Generation_NordestePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generation_Nordestes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NordesteCountArgs} args - Arguments to filter Generation_Nordestes to count.
     * @example
     * // Count the number of Generation_Nordestes
     * const count = await prisma.generation_Nordeste.count({
     *   where: {
     *     // ... the filter for the Generation_Nordestes we want to count
     *   }
     * })
    **/
    count<T extends Generation_NordesteCountArgs>(
      args?: Subset<T, Generation_NordesteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Generation_NordesteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generation_Nordeste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NordesteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Generation_NordesteAggregateArgs>(args: Subset<T, Generation_NordesteAggregateArgs>): Prisma.PrismaPromise<GetGeneration_NordesteAggregateType<T>>

    /**
     * Group by Generation_Nordeste.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_NordesteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Generation_NordesteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Generation_NordesteGroupByArgs['orderBy'] }
        : { orderBy?: Generation_NordesteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Generation_NordesteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneration_NordesteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generation_Nordeste model
   */
  readonly fields: Generation_NordesteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generation_Nordeste.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Generation_NordesteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Generation_Nordeste model
   */
  interface Generation_NordesteFieldRefs {
    readonly id: FieldRef<"Generation_Nordeste", 'Int'>
    readonly instant: FieldRef<"Generation_Nordeste", 'String'>
    readonly instantDate: FieldRef<"Generation_Nordeste", 'DateTime'>
    readonly hydro: FieldRef<"Generation_Nordeste", 'Float'>
    readonly nuclear: FieldRef<"Generation_Nordeste", 'Float'>
    readonly solar: FieldRef<"Generation_Nordeste", 'Float'>
    readonly thermal: FieldRef<"Generation_Nordeste", 'Float'>
    readonly wind: FieldRef<"Generation_Nordeste", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Generation_Nordeste findUnique
   */
  export type Generation_NordesteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Nordeste to fetch.
     */
    where: Generation_NordesteWhereUniqueInput
  }

  /**
   * Generation_Nordeste findUniqueOrThrow
   */
  export type Generation_NordesteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Nordeste to fetch.
     */
    where: Generation_NordesteWhereUniqueInput
  }

  /**
   * Generation_Nordeste findFirst
   */
  export type Generation_NordesteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Nordeste to fetch.
     */
    where?: Generation_NordesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nordestes to fetch.
     */
    orderBy?: Generation_NordesteOrderByWithRelationInput | Generation_NordesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_Nordestes.
     */
    cursor?: Generation_NordesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nordestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nordestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_Nordestes.
     */
    distinct?: Generation_NordesteScalarFieldEnum | Generation_NordesteScalarFieldEnum[]
  }

  /**
   * Generation_Nordeste findFirstOrThrow
   */
  export type Generation_NordesteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Nordeste to fetch.
     */
    where?: Generation_NordesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nordestes to fetch.
     */
    orderBy?: Generation_NordesteOrderByWithRelationInput | Generation_NordesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_Nordestes.
     */
    cursor?: Generation_NordesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nordestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nordestes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_Nordestes.
     */
    distinct?: Generation_NordesteScalarFieldEnum | Generation_NordesteScalarFieldEnum[]
  }

  /**
   * Generation_Nordeste findMany
   */
  export type Generation_NordesteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * Filter, which Generation_Nordestes to fetch.
     */
    where?: Generation_NordesteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_Nordestes to fetch.
     */
    orderBy?: Generation_NordesteOrderByWithRelationInput | Generation_NordesteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generation_Nordestes.
     */
    cursor?: Generation_NordesteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_Nordestes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_Nordestes.
     */
    skip?: number
    distinct?: Generation_NordesteScalarFieldEnum | Generation_NordesteScalarFieldEnum[]
  }

  /**
   * Generation_Nordeste create
   */
  export type Generation_NordesteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * The data needed to create a Generation_Nordeste.
     */
    data: XOR<Generation_NordesteCreateInput, Generation_NordesteUncheckedCreateInput>
  }

  /**
   * Generation_Nordeste createMany
   */
  export type Generation_NordesteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generation_Nordestes.
     */
    data: Generation_NordesteCreateManyInput | Generation_NordesteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_Nordeste createManyAndReturn
   */
  export type Generation_NordesteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * The data used to create many Generation_Nordestes.
     */
    data: Generation_NordesteCreateManyInput | Generation_NordesteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_Nordeste update
   */
  export type Generation_NordesteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * The data needed to update a Generation_Nordeste.
     */
    data: XOR<Generation_NordesteUpdateInput, Generation_NordesteUncheckedUpdateInput>
    /**
     * Choose, which Generation_Nordeste to update.
     */
    where: Generation_NordesteWhereUniqueInput
  }

  /**
   * Generation_Nordeste updateMany
   */
  export type Generation_NordesteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generation_Nordestes.
     */
    data: XOR<Generation_NordesteUpdateManyMutationInput, Generation_NordesteUncheckedUpdateManyInput>
    /**
     * Filter which Generation_Nordestes to update
     */
    where?: Generation_NordesteWhereInput
    /**
     * Limit how many Generation_Nordestes to update.
     */
    limit?: number
  }

  /**
   * Generation_Nordeste updateManyAndReturn
   */
  export type Generation_NordesteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * The data used to update Generation_Nordestes.
     */
    data: XOR<Generation_NordesteUpdateManyMutationInput, Generation_NordesteUncheckedUpdateManyInput>
    /**
     * Filter which Generation_Nordestes to update
     */
    where?: Generation_NordesteWhereInput
    /**
     * Limit how many Generation_Nordestes to update.
     */
    limit?: number
  }

  /**
   * Generation_Nordeste upsert
   */
  export type Generation_NordesteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * The filter to search for the Generation_Nordeste to update in case it exists.
     */
    where: Generation_NordesteWhereUniqueInput
    /**
     * In case the Generation_Nordeste found by the `where` argument doesn't exist, create a new Generation_Nordeste with this data.
     */
    create: XOR<Generation_NordesteCreateInput, Generation_NordesteUncheckedCreateInput>
    /**
     * In case the Generation_Nordeste was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Generation_NordesteUpdateInput, Generation_NordesteUncheckedUpdateInput>
  }

  /**
   * Generation_Nordeste delete
   */
  export type Generation_NordesteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
    /**
     * Filter which Generation_Nordeste to delete.
     */
    where: Generation_NordesteWhereUniqueInput
  }

  /**
   * Generation_Nordeste deleteMany
   */
  export type Generation_NordesteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_Nordestes to delete
     */
    where?: Generation_NordesteWhereInput
    /**
     * Limit how many Generation_Nordestes to delete.
     */
    limit?: number
  }

  /**
   * Generation_Nordeste without action
   */
  export type Generation_NordesteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_Nordeste
     */
    select?: Generation_NordesteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_Nordeste
     */
    omit?: Generation_NordesteOmit<ExtArgs> | null
  }


  /**
   * Model Generation_COSU
   */

  export type AggregateGeneration_COSU = {
    _count: Generation_COSUCountAggregateOutputType | null
    _avg: Generation_COSUAvgAggregateOutputType | null
    _sum: Generation_COSUSumAggregateOutputType | null
    _min: Generation_COSUMinAggregateOutputType | null
    _max: Generation_COSUMaxAggregateOutputType | null
  }

  export type Generation_COSUAvgAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_COSUSumAggregateOutputType = {
    id: number | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_COSUMinAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_COSUMaxAggregateOutputType = {
    id: number | null
    instant: string | null
    instantDate: Date | null
    hydro: number | null
    nuclear: number | null
    solar: number | null
    thermal: number | null
    wind: number | null
  }

  export type Generation_COSUCountAggregateOutputType = {
    id: number
    instant: number
    instantDate: number
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _all: number
  }


  export type Generation_COSUAvgAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_COSUSumAggregateInputType = {
    id?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_COSUMinAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_COSUMaxAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
  }

  export type Generation_COSUCountAggregateInputType = {
    id?: true
    instant?: true
    instantDate?: true
    hydro?: true
    nuclear?: true
    solar?: true
    thermal?: true
    wind?: true
    _all?: true
  }

  export type Generation_COSUAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_COSU to aggregate.
     */
    where?: Generation_COSUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_COSUS to fetch.
     */
    orderBy?: Generation_COSUOrderByWithRelationInput | Generation_COSUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Generation_COSUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_COSUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_COSUS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generation_COSUS
    **/
    _count?: true | Generation_COSUCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Generation_COSUAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Generation_COSUSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Generation_COSUMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Generation_COSUMaxAggregateInputType
  }

  export type GetGeneration_COSUAggregateType<T extends Generation_COSUAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneration_COSU]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneration_COSU[P]>
      : GetScalarType<T[P], AggregateGeneration_COSU[P]>
  }




  export type Generation_COSUGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Generation_COSUWhereInput
    orderBy?: Generation_COSUOrderByWithAggregationInput | Generation_COSUOrderByWithAggregationInput[]
    by: Generation_COSUScalarFieldEnum[] | Generation_COSUScalarFieldEnum
    having?: Generation_COSUScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Generation_COSUCountAggregateInputType | true
    _avg?: Generation_COSUAvgAggregateInputType
    _sum?: Generation_COSUSumAggregateInputType
    _min?: Generation_COSUMinAggregateInputType
    _max?: Generation_COSUMaxAggregateInputType
  }

  export type Generation_COSUGroupByOutputType = {
    id: number
    instant: string
    instantDate: Date
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
    _count: Generation_COSUCountAggregateOutputType | null
    _avg: Generation_COSUAvgAggregateOutputType | null
    _sum: Generation_COSUSumAggregateOutputType | null
    _min: Generation_COSUMinAggregateOutputType | null
    _max: Generation_COSUMaxAggregateOutputType | null
  }

  type GetGeneration_COSUGroupByPayload<T extends Generation_COSUGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Generation_COSUGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Generation_COSUGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Generation_COSUGroupByOutputType[P]>
            : GetScalarType<T[P], Generation_COSUGroupByOutputType[P]>
        }
      >
    >


  export type Generation_COSUSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_COSU"]>

  export type Generation_COSUSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_COSU"]>

  export type Generation_COSUSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }, ExtArgs["result"]["generation_COSU"]>

  export type Generation_COSUSelectScalar = {
    id?: boolean
    instant?: boolean
    instantDate?: boolean
    hydro?: boolean
    nuclear?: boolean
    solar?: boolean
    thermal?: boolean
    wind?: boolean
  }

  export type Generation_COSUOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instant" | "instantDate" | "hydro" | "nuclear" | "solar" | "thermal" | "wind", ExtArgs["result"]["generation_COSU"]>

  export type $Generation_COSUPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Generation_COSU"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instant: string
      instantDate: Date
      hydro: number
      nuclear: number
      solar: number
      thermal: number
      wind: number
    }, ExtArgs["result"]["generation_COSU"]>
    composites: {}
  }

  type Generation_COSUGetPayload<S extends boolean | null | undefined | Generation_COSUDefaultArgs> = $Result.GetResult<Prisma.$Generation_COSUPayload, S>

  type Generation_COSUCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Generation_COSUFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Generation_COSUCountAggregateInputType | true
    }

  export interface Generation_COSUDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Generation_COSU'], meta: { name: 'Generation_COSU' } }
    /**
     * Find zero or one Generation_COSU that matches the filter.
     * @param {Generation_COSUFindUniqueArgs} args - Arguments to find a Generation_COSU
     * @example
     * // Get one Generation_COSU
     * const generation_COSU = await prisma.generation_COSU.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Generation_COSUFindUniqueArgs>(args: SelectSubset<T, Generation_COSUFindUniqueArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Generation_COSU that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Generation_COSUFindUniqueOrThrowArgs} args - Arguments to find a Generation_COSU
     * @example
     * // Get one Generation_COSU
     * const generation_COSU = await prisma.generation_COSU.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Generation_COSUFindUniqueOrThrowArgs>(args: SelectSubset<T, Generation_COSUFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_COSU that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_COSUFindFirstArgs} args - Arguments to find a Generation_COSU
     * @example
     * // Get one Generation_COSU
     * const generation_COSU = await prisma.generation_COSU.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Generation_COSUFindFirstArgs>(args?: SelectSubset<T, Generation_COSUFindFirstArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Generation_COSU that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_COSUFindFirstOrThrowArgs} args - Arguments to find a Generation_COSU
     * @example
     * // Get one Generation_COSU
     * const generation_COSU = await prisma.generation_COSU.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Generation_COSUFindFirstOrThrowArgs>(args?: SelectSubset<T, Generation_COSUFindFirstOrThrowArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generation_COSUS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_COSUFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generation_COSUS
     * const generation_COSUS = await prisma.generation_COSU.findMany()
     * 
     * // Get first 10 Generation_COSUS
     * const generation_COSUS = await prisma.generation_COSU.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generation_COSUWithIdOnly = await prisma.generation_COSU.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Generation_COSUFindManyArgs>(args?: SelectSubset<T, Generation_COSUFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Generation_COSU.
     * @param {Generation_COSUCreateArgs} args - Arguments to create a Generation_COSU.
     * @example
     * // Create one Generation_COSU
     * const Generation_COSU = await prisma.generation_COSU.create({
     *   data: {
     *     // ... data to create a Generation_COSU
     *   }
     * })
     * 
     */
    create<T extends Generation_COSUCreateArgs>(args: SelectSubset<T, Generation_COSUCreateArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generation_COSUS.
     * @param {Generation_COSUCreateManyArgs} args - Arguments to create many Generation_COSUS.
     * @example
     * // Create many Generation_COSUS
     * const generation_COSU = await prisma.generation_COSU.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Generation_COSUCreateManyArgs>(args?: SelectSubset<T, Generation_COSUCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generation_COSUS and returns the data saved in the database.
     * @param {Generation_COSUCreateManyAndReturnArgs} args - Arguments to create many Generation_COSUS.
     * @example
     * // Create many Generation_COSUS
     * const generation_COSU = await prisma.generation_COSU.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generation_COSUS and only return the `id`
     * const generation_COSUWithIdOnly = await prisma.generation_COSU.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Generation_COSUCreateManyAndReturnArgs>(args?: SelectSubset<T, Generation_COSUCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Generation_COSU.
     * @param {Generation_COSUDeleteArgs} args - Arguments to delete one Generation_COSU.
     * @example
     * // Delete one Generation_COSU
     * const Generation_COSU = await prisma.generation_COSU.delete({
     *   where: {
     *     // ... filter to delete one Generation_COSU
     *   }
     * })
     * 
     */
    delete<T extends Generation_COSUDeleteArgs>(args: SelectSubset<T, Generation_COSUDeleteArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Generation_COSU.
     * @param {Generation_COSUUpdateArgs} args - Arguments to update one Generation_COSU.
     * @example
     * // Update one Generation_COSU
     * const generation_COSU = await prisma.generation_COSU.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Generation_COSUUpdateArgs>(args: SelectSubset<T, Generation_COSUUpdateArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generation_COSUS.
     * @param {Generation_COSUDeleteManyArgs} args - Arguments to filter Generation_COSUS to delete.
     * @example
     * // Delete a few Generation_COSUS
     * const { count } = await prisma.generation_COSU.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Generation_COSUDeleteManyArgs>(args?: SelectSubset<T, Generation_COSUDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_COSUS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_COSUUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generation_COSUS
     * const generation_COSU = await prisma.generation_COSU.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Generation_COSUUpdateManyArgs>(args: SelectSubset<T, Generation_COSUUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generation_COSUS and returns the data updated in the database.
     * @param {Generation_COSUUpdateManyAndReturnArgs} args - Arguments to update many Generation_COSUS.
     * @example
     * // Update many Generation_COSUS
     * const generation_COSU = await prisma.generation_COSU.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generation_COSUS and only return the `id`
     * const generation_COSUWithIdOnly = await prisma.generation_COSU.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Generation_COSUUpdateManyAndReturnArgs>(args: SelectSubset<T, Generation_COSUUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Generation_COSU.
     * @param {Generation_COSUUpsertArgs} args - Arguments to update or create a Generation_COSU.
     * @example
     * // Update or create a Generation_COSU
     * const generation_COSU = await prisma.generation_COSU.upsert({
     *   create: {
     *     // ... data to create a Generation_COSU
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Generation_COSU we want to update
     *   }
     * })
     */
    upsert<T extends Generation_COSUUpsertArgs>(args: SelectSubset<T, Generation_COSUUpsertArgs<ExtArgs>>): Prisma__Generation_COSUClient<$Result.GetResult<Prisma.$Generation_COSUPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generation_COSUS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_COSUCountArgs} args - Arguments to filter Generation_COSUS to count.
     * @example
     * // Count the number of Generation_COSUS
     * const count = await prisma.generation_COSU.count({
     *   where: {
     *     // ... the filter for the Generation_COSUS we want to count
     *   }
     * })
    **/
    count<T extends Generation_COSUCountArgs>(
      args?: Subset<T, Generation_COSUCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Generation_COSUCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Generation_COSU.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_COSUAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Generation_COSUAggregateArgs>(args: Subset<T, Generation_COSUAggregateArgs>): Prisma.PrismaPromise<GetGeneration_COSUAggregateType<T>>

    /**
     * Group by Generation_COSU.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Generation_COSUGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Generation_COSUGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Generation_COSUGroupByArgs['orderBy'] }
        : { orderBy?: Generation_COSUGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Generation_COSUGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneration_COSUGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Generation_COSU model
   */
  readonly fields: Generation_COSUFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Generation_COSU.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Generation_COSUClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Generation_COSU model
   */
  interface Generation_COSUFieldRefs {
    readonly id: FieldRef<"Generation_COSU", 'Int'>
    readonly instant: FieldRef<"Generation_COSU", 'String'>
    readonly instantDate: FieldRef<"Generation_COSU", 'DateTime'>
    readonly hydro: FieldRef<"Generation_COSU", 'Float'>
    readonly nuclear: FieldRef<"Generation_COSU", 'Float'>
    readonly solar: FieldRef<"Generation_COSU", 'Float'>
    readonly thermal: FieldRef<"Generation_COSU", 'Float'>
    readonly wind: FieldRef<"Generation_COSU", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Generation_COSU findUnique
   */
  export type Generation_COSUFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * Filter, which Generation_COSU to fetch.
     */
    where: Generation_COSUWhereUniqueInput
  }

  /**
   * Generation_COSU findUniqueOrThrow
   */
  export type Generation_COSUFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * Filter, which Generation_COSU to fetch.
     */
    where: Generation_COSUWhereUniqueInput
  }

  /**
   * Generation_COSU findFirst
   */
  export type Generation_COSUFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * Filter, which Generation_COSU to fetch.
     */
    where?: Generation_COSUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_COSUS to fetch.
     */
    orderBy?: Generation_COSUOrderByWithRelationInput | Generation_COSUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_COSUS.
     */
    cursor?: Generation_COSUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_COSUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_COSUS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_COSUS.
     */
    distinct?: Generation_COSUScalarFieldEnum | Generation_COSUScalarFieldEnum[]
  }

  /**
   * Generation_COSU findFirstOrThrow
   */
  export type Generation_COSUFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * Filter, which Generation_COSU to fetch.
     */
    where?: Generation_COSUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_COSUS to fetch.
     */
    orderBy?: Generation_COSUOrderByWithRelationInput | Generation_COSUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generation_COSUS.
     */
    cursor?: Generation_COSUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_COSUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_COSUS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generation_COSUS.
     */
    distinct?: Generation_COSUScalarFieldEnum | Generation_COSUScalarFieldEnum[]
  }

  /**
   * Generation_COSU findMany
   */
  export type Generation_COSUFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * Filter, which Generation_COSUS to fetch.
     */
    where?: Generation_COSUWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generation_COSUS to fetch.
     */
    orderBy?: Generation_COSUOrderByWithRelationInput | Generation_COSUOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generation_COSUS.
     */
    cursor?: Generation_COSUWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generation_COSUS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generation_COSUS.
     */
    skip?: number
    distinct?: Generation_COSUScalarFieldEnum | Generation_COSUScalarFieldEnum[]
  }

  /**
   * Generation_COSU create
   */
  export type Generation_COSUCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * The data needed to create a Generation_COSU.
     */
    data: XOR<Generation_COSUCreateInput, Generation_COSUUncheckedCreateInput>
  }

  /**
   * Generation_COSU createMany
   */
  export type Generation_COSUCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generation_COSUS.
     */
    data: Generation_COSUCreateManyInput | Generation_COSUCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_COSU createManyAndReturn
   */
  export type Generation_COSUCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * The data used to create many Generation_COSUS.
     */
    data: Generation_COSUCreateManyInput | Generation_COSUCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Generation_COSU update
   */
  export type Generation_COSUUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * The data needed to update a Generation_COSU.
     */
    data: XOR<Generation_COSUUpdateInput, Generation_COSUUncheckedUpdateInput>
    /**
     * Choose, which Generation_COSU to update.
     */
    where: Generation_COSUWhereUniqueInput
  }

  /**
   * Generation_COSU updateMany
   */
  export type Generation_COSUUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generation_COSUS.
     */
    data: XOR<Generation_COSUUpdateManyMutationInput, Generation_COSUUncheckedUpdateManyInput>
    /**
     * Filter which Generation_COSUS to update
     */
    where?: Generation_COSUWhereInput
    /**
     * Limit how many Generation_COSUS to update.
     */
    limit?: number
  }

  /**
   * Generation_COSU updateManyAndReturn
   */
  export type Generation_COSUUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * The data used to update Generation_COSUS.
     */
    data: XOR<Generation_COSUUpdateManyMutationInput, Generation_COSUUncheckedUpdateManyInput>
    /**
     * Filter which Generation_COSUS to update
     */
    where?: Generation_COSUWhereInput
    /**
     * Limit how many Generation_COSUS to update.
     */
    limit?: number
  }

  /**
   * Generation_COSU upsert
   */
  export type Generation_COSUUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * The filter to search for the Generation_COSU to update in case it exists.
     */
    where: Generation_COSUWhereUniqueInput
    /**
     * In case the Generation_COSU found by the `where` argument doesn't exist, create a new Generation_COSU with this data.
     */
    create: XOR<Generation_COSUCreateInput, Generation_COSUUncheckedCreateInput>
    /**
     * In case the Generation_COSU was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Generation_COSUUpdateInput, Generation_COSUUncheckedUpdateInput>
  }

  /**
   * Generation_COSU delete
   */
  export type Generation_COSUDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
    /**
     * Filter which Generation_COSU to delete.
     */
    where: Generation_COSUWhereUniqueInput
  }

  /**
   * Generation_COSU deleteMany
   */
  export type Generation_COSUDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generation_COSUS to delete
     */
    where?: Generation_COSUWhereInput
    /**
     * Limit how many Generation_COSUS to delete.
     */
    limit?: number
  }

  /**
   * Generation_COSU without action
   */
  export type Generation_COSUDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Generation_COSU
     */
    select?: Generation_COSUSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Generation_COSU
     */
    omit?: Generation_COSUOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Generation_SINScalarFieldEnum: {
    id: 'id',
    instant: 'instant',
    instantDate: 'instantDate',
    hydro: 'hydro',
    nuclear: 'nuclear',
    solar: 'solar',
    thermal: 'thermal',
    wind: 'wind'
  };

  export type Generation_SINScalarFieldEnum = (typeof Generation_SINScalarFieldEnum)[keyof typeof Generation_SINScalarFieldEnum]


  export const Generation_NorteScalarFieldEnum: {
    id: 'id',
    instant: 'instant',
    instantDate: 'instantDate',
    hydro: 'hydro',
    nuclear: 'nuclear',
    solar: 'solar',
    thermal: 'thermal',
    wind: 'wind'
  };

  export type Generation_NorteScalarFieldEnum = (typeof Generation_NorteScalarFieldEnum)[keyof typeof Generation_NorteScalarFieldEnum]


  export const Generation_SulScalarFieldEnum: {
    id: 'id',
    instant: 'instant',
    instantDate: 'instantDate',
    hydro: 'hydro',
    nuclear: 'nuclear',
    solar: 'solar',
    thermal: 'thermal',
    wind: 'wind'
  };

  export type Generation_SulScalarFieldEnum = (typeof Generation_SulScalarFieldEnum)[keyof typeof Generation_SulScalarFieldEnum]


  export const Generation_NordesteScalarFieldEnum: {
    id: 'id',
    instant: 'instant',
    instantDate: 'instantDate',
    hydro: 'hydro',
    nuclear: 'nuclear',
    solar: 'solar',
    thermal: 'thermal',
    wind: 'wind'
  };

  export type Generation_NordesteScalarFieldEnum = (typeof Generation_NordesteScalarFieldEnum)[keyof typeof Generation_NordesteScalarFieldEnum]


  export const Generation_COSUScalarFieldEnum: {
    id: 'id',
    instant: 'instant',
    instantDate: 'instantDate',
    hydro: 'hydro',
    nuclear: 'nuclear',
    solar: 'solar',
    thermal: 'thermal',
    wind: 'wind'
  };

  export type Generation_COSUScalarFieldEnum = (typeof Generation_COSUScalarFieldEnum)[keyof typeof Generation_COSUScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Generation_SINWhereInput = {
    AND?: Generation_SINWhereInput | Generation_SINWhereInput[]
    OR?: Generation_SINWhereInput[]
    NOT?: Generation_SINWhereInput | Generation_SINWhereInput[]
    id?: IntFilter<"Generation_SIN"> | number
    instant?: StringFilter<"Generation_SIN"> | string
    instantDate?: DateTimeFilter<"Generation_SIN"> | Date | string
    hydro?: FloatFilter<"Generation_SIN"> | number
    nuclear?: FloatFilter<"Generation_SIN"> | number
    solar?: FloatFilter<"Generation_SIN"> | number
    thermal?: FloatFilter<"Generation_SIN"> | number
    wind?: FloatFilter<"Generation_SIN"> | number
  }

  export type Generation_SINOrderByWithRelationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SINWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Generation_SINWhereInput | Generation_SINWhereInput[]
    OR?: Generation_SINWhereInput[]
    NOT?: Generation_SINWhereInput | Generation_SINWhereInput[]
    instant?: StringFilter<"Generation_SIN"> | string
    instantDate?: DateTimeFilter<"Generation_SIN"> | Date | string
    hydro?: FloatFilter<"Generation_SIN"> | number
    nuclear?: FloatFilter<"Generation_SIN"> | number
    solar?: FloatFilter<"Generation_SIN"> | number
    thermal?: FloatFilter<"Generation_SIN"> | number
    wind?: FloatFilter<"Generation_SIN"> | number
  }, "id">

  export type Generation_SINOrderByWithAggregationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
    _count?: Generation_SINCountOrderByAggregateInput
    _avg?: Generation_SINAvgOrderByAggregateInput
    _max?: Generation_SINMaxOrderByAggregateInput
    _min?: Generation_SINMinOrderByAggregateInput
    _sum?: Generation_SINSumOrderByAggregateInput
  }

  export type Generation_SINScalarWhereWithAggregatesInput = {
    AND?: Generation_SINScalarWhereWithAggregatesInput | Generation_SINScalarWhereWithAggregatesInput[]
    OR?: Generation_SINScalarWhereWithAggregatesInput[]
    NOT?: Generation_SINScalarWhereWithAggregatesInput | Generation_SINScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Generation_SIN"> | number
    instant?: StringWithAggregatesFilter<"Generation_SIN"> | string
    instantDate?: DateTimeWithAggregatesFilter<"Generation_SIN"> | Date | string
    hydro?: FloatWithAggregatesFilter<"Generation_SIN"> | number
    nuclear?: FloatWithAggregatesFilter<"Generation_SIN"> | number
    solar?: FloatWithAggregatesFilter<"Generation_SIN"> | number
    thermal?: FloatWithAggregatesFilter<"Generation_SIN"> | number
    wind?: FloatWithAggregatesFilter<"Generation_SIN"> | number
  }

  export type Generation_NorteWhereInput = {
    AND?: Generation_NorteWhereInput | Generation_NorteWhereInput[]
    OR?: Generation_NorteWhereInput[]
    NOT?: Generation_NorteWhereInput | Generation_NorteWhereInput[]
    id?: IntFilter<"Generation_Norte"> | number
    instant?: StringFilter<"Generation_Norte"> | string
    instantDate?: DateTimeFilter<"Generation_Norte"> | Date | string
    hydro?: FloatFilter<"Generation_Norte"> | number
    nuclear?: FloatFilter<"Generation_Norte"> | number
    solar?: FloatFilter<"Generation_Norte"> | number
    thermal?: FloatFilter<"Generation_Norte"> | number
    wind?: FloatFilter<"Generation_Norte"> | number
  }

  export type Generation_NorteOrderByWithRelationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NorteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Generation_NorteWhereInput | Generation_NorteWhereInput[]
    OR?: Generation_NorteWhereInput[]
    NOT?: Generation_NorteWhereInput | Generation_NorteWhereInput[]
    instant?: StringFilter<"Generation_Norte"> | string
    instantDate?: DateTimeFilter<"Generation_Norte"> | Date | string
    hydro?: FloatFilter<"Generation_Norte"> | number
    nuclear?: FloatFilter<"Generation_Norte"> | number
    solar?: FloatFilter<"Generation_Norte"> | number
    thermal?: FloatFilter<"Generation_Norte"> | number
    wind?: FloatFilter<"Generation_Norte"> | number
  }, "id">

  export type Generation_NorteOrderByWithAggregationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
    _count?: Generation_NorteCountOrderByAggregateInput
    _avg?: Generation_NorteAvgOrderByAggregateInput
    _max?: Generation_NorteMaxOrderByAggregateInput
    _min?: Generation_NorteMinOrderByAggregateInput
    _sum?: Generation_NorteSumOrderByAggregateInput
  }

  export type Generation_NorteScalarWhereWithAggregatesInput = {
    AND?: Generation_NorteScalarWhereWithAggregatesInput | Generation_NorteScalarWhereWithAggregatesInput[]
    OR?: Generation_NorteScalarWhereWithAggregatesInput[]
    NOT?: Generation_NorteScalarWhereWithAggregatesInput | Generation_NorteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Generation_Norte"> | number
    instant?: StringWithAggregatesFilter<"Generation_Norte"> | string
    instantDate?: DateTimeWithAggregatesFilter<"Generation_Norte"> | Date | string
    hydro?: FloatWithAggregatesFilter<"Generation_Norte"> | number
    nuclear?: FloatWithAggregatesFilter<"Generation_Norte"> | number
    solar?: FloatWithAggregatesFilter<"Generation_Norte"> | number
    thermal?: FloatWithAggregatesFilter<"Generation_Norte"> | number
    wind?: FloatWithAggregatesFilter<"Generation_Norte"> | number
  }

  export type Generation_SulWhereInput = {
    AND?: Generation_SulWhereInput | Generation_SulWhereInput[]
    OR?: Generation_SulWhereInput[]
    NOT?: Generation_SulWhereInput | Generation_SulWhereInput[]
    id?: IntFilter<"Generation_Sul"> | number
    instant?: StringFilter<"Generation_Sul"> | string
    instantDate?: DateTimeFilter<"Generation_Sul"> | Date | string
    hydro?: FloatFilter<"Generation_Sul"> | number
    nuclear?: FloatFilter<"Generation_Sul"> | number
    solar?: FloatFilter<"Generation_Sul"> | number
    thermal?: FloatFilter<"Generation_Sul"> | number
    wind?: FloatFilter<"Generation_Sul"> | number
  }

  export type Generation_SulOrderByWithRelationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SulWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Generation_SulWhereInput | Generation_SulWhereInput[]
    OR?: Generation_SulWhereInput[]
    NOT?: Generation_SulWhereInput | Generation_SulWhereInput[]
    instant?: StringFilter<"Generation_Sul"> | string
    instantDate?: DateTimeFilter<"Generation_Sul"> | Date | string
    hydro?: FloatFilter<"Generation_Sul"> | number
    nuclear?: FloatFilter<"Generation_Sul"> | number
    solar?: FloatFilter<"Generation_Sul"> | number
    thermal?: FloatFilter<"Generation_Sul"> | number
    wind?: FloatFilter<"Generation_Sul"> | number
  }, "id">

  export type Generation_SulOrderByWithAggregationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
    _count?: Generation_SulCountOrderByAggregateInput
    _avg?: Generation_SulAvgOrderByAggregateInput
    _max?: Generation_SulMaxOrderByAggregateInput
    _min?: Generation_SulMinOrderByAggregateInput
    _sum?: Generation_SulSumOrderByAggregateInput
  }

  export type Generation_SulScalarWhereWithAggregatesInput = {
    AND?: Generation_SulScalarWhereWithAggregatesInput | Generation_SulScalarWhereWithAggregatesInput[]
    OR?: Generation_SulScalarWhereWithAggregatesInput[]
    NOT?: Generation_SulScalarWhereWithAggregatesInput | Generation_SulScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Generation_Sul"> | number
    instant?: StringWithAggregatesFilter<"Generation_Sul"> | string
    instantDate?: DateTimeWithAggregatesFilter<"Generation_Sul"> | Date | string
    hydro?: FloatWithAggregatesFilter<"Generation_Sul"> | number
    nuclear?: FloatWithAggregatesFilter<"Generation_Sul"> | number
    solar?: FloatWithAggregatesFilter<"Generation_Sul"> | number
    thermal?: FloatWithAggregatesFilter<"Generation_Sul"> | number
    wind?: FloatWithAggregatesFilter<"Generation_Sul"> | number
  }

  export type Generation_NordesteWhereInput = {
    AND?: Generation_NordesteWhereInput | Generation_NordesteWhereInput[]
    OR?: Generation_NordesteWhereInput[]
    NOT?: Generation_NordesteWhereInput | Generation_NordesteWhereInput[]
    id?: IntFilter<"Generation_Nordeste"> | number
    instant?: StringFilter<"Generation_Nordeste"> | string
    instantDate?: DateTimeFilter<"Generation_Nordeste"> | Date | string
    hydro?: FloatFilter<"Generation_Nordeste"> | number
    nuclear?: FloatFilter<"Generation_Nordeste"> | number
    solar?: FloatFilter<"Generation_Nordeste"> | number
    thermal?: FloatFilter<"Generation_Nordeste"> | number
    wind?: FloatFilter<"Generation_Nordeste"> | number
  }

  export type Generation_NordesteOrderByWithRelationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NordesteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Generation_NordesteWhereInput | Generation_NordesteWhereInput[]
    OR?: Generation_NordesteWhereInput[]
    NOT?: Generation_NordesteWhereInput | Generation_NordesteWhereInput[]
    instant?: StringFilter<"Generation_Nordeste"> | string
    instantDate?: DateTimeFilter<"Generation_Nordeste"> | Date | string
    hydro?: FloatFilter<"Generation_Nordeste"> | number
    nuclear?: FloatFilter<"Generation_Nordeste"> | number
    solar?: FloatFilter<"Generation_Nordeste"> | number
    thermal?: FloatFilter<"Generation_Nordeste"> | number
    wind?: FloatFilter<"Generation_Nordeste"> | number
  }, "id">

  export type Generation_NordesteOrderByWithAggregationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
    _count?: Generation_NordesteCountOrderByAggregateInput
    _avg?: Generation_NordesteAvgOrderByAggregateInput
    _max?: Generation_NordesteMaxOrderByAggregateInput
    _min?: Generation_NordesteMinOrderByAggregateInput
    _sum?: Generation_NordesteSumOrderByAggregateInput
  }

  export type Generation_NordesteScalarWhereWithAggregatesInput = {
    AND?: Generation_NordesteScalarWhereWithAggregatesInput | Generation_NordesteScalarWhereWithAggregatesInput[]
    OR?: Generation_NordesteScalarWhereWithAggregatesInput[]
    NOT?: Generation_NordesteScalarWhereWithAggregatesInput | Generation_NordesteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Generation_Nordeste"> | number
    instant?: StringWithAggregatesFilter<"Generation_Nordeste"> | string
    instantDate?: DateTimeWithAggregatesFilter<"Generation_Nordeste"> | Date | string
    hydro?: FloatWithAggregatesFilter<"Generation_Nordeste"> | number
    nuclear?: FloatWithAggregatesFilter<"Generation_Nordeste"> | number
    solar?: FloatWithAggregatesFilter<"Generation_Nordeste"> | number
    thermal?: FloatWithAggregatesFilter<"Generation_Nordeste"> | number
    wind?: FloatWithAggregatesFilter<"Generation_Nordeste"> | number
  }

  export type Generation_COSUWhereInput = {
    AND?: Generation_COSUWhereInput | Generation_COSUWhereInput[]
    OR?: Generation_COSUWhereInput[]
    NOT?: Generation_COSUWhereInput | Generation_COSUWhereInput[]
    id?: IntFilter<"Generation_COSU"> | number
    instant?: StringFilter<"Generation_COSU"> | string
    instantDate?: DateTimeFilter<"Generation_COSU"> | Date | string
    hydro?: FloatFilter<"Generation_COSU"> | number
    nuclear?: FloatFilter<"Generation_COSU"> | number
    solar?: FloatFilter<"Generation_COSU"> | number
    thermal?: FloatFilter<"Generation_COSU"> | number
    wind?: FloatFilter<"Generation_COSU"> | number
  }

  export type Generation_COSUOrderByWithRelationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_COSUWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Generation_COSUWhereInput | Generation_COSUWhereInput[]
    OR?: Generation_COSUWhereInput[]
    NOT?: Generation_COSUWhereInput | Generation_COSUWhereInput[]
    instant?: StringFilter<"Generation_COSU"> | string
    instantDate?: DateTimeFilter<"Generation_COSU"> | Date | string
    hydro?: FloatFilter<"Generation_COSU"> | number
    nuclear?: FloatFilter<"Generation_COSU"> | number
    solar?: FloatFilter<"Generation_COSU"> | number
    thermal?: FloatFilter<"Generation_COSU"> | number
    wind?: FloatFilter<"Generation_COSU"> | number
  }, "id">

  export type Generation_COSUOrderByWithAggregationInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
    _count?: Generation_COSUCountOrderByAggregateInput
    _avg?: Generation_COSUAvgOrderByAggregateInput
    _max?: Generation_COSUMaxOrderByAggregateInput
    _min?: Generation_COSUMinOrderByAggregateInput
    _sum?: Generation_COSUSumOrderByAggregateInput
  }

  export type Generation_COSUScalarWhereWithAggregatesInput = {
    AND?: Generation_COSUScalarWhereWithAggregatesInput | Generation_COSUScalarWhereWithAggregatesInput[]
    OR?: Generation_COSUScalarWhereWithAggregatesInput[]
    NOT?: Generation_COSUScalarWhereWithAggregatesInput | Generation_COSUScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Generation_COSU"> | number
    instant?: StringWithAggregatesFilter<"Generation_COSU"> | string
    instantDate?: DateTimeWithAggregatesFilter<"Generation_COSU"> | Date | string
    hydro?: FloatWithAggregatesFilter<"Generation_COSU"> | number
    nuclear?: FloatWithAggregatesFilter<"Generation_COSU"> | number
    solar?: FloatWithAggregatesFilter<"Generation_COSU"> | number
    thermal?: FloatWithAggregatesFilter<"Generation_COSU"> | number
    wind?: FloatWithAggregatesFilter<"Generation_COSU"> | number
  }

  export type Generation_SINCreateInput = {
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_SINUncheckedCreateInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_SINUpdateInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_SINUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_SINCreateManyInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_SINUpdateManyMutationInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_SINUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NorteCreateInput = {
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_NorteUncheckedCreateInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_NorteUpdateInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NorteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NorteCreateManyInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_NorteUpdateManyMutationInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NorteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_SulCreateInput = {
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_SulUncheckedCreateInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_SulUpdateInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_SulUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_SulCreateManyInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_SulUpdateManyMutationInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_SulUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NordesteCreateInput = {
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_NordesteUncheckedCreateInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_NordesteUpdateInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NordesteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NordesteCreateManyInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_NordesteUpdateManyMutationInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_NordesteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_COSUCreateInput = {
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_COSUUncheckedCreateInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_COSUUpdateInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_COSUUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_COSUCreateManyInput = {
    id?: number
    instant: string
    instantDate: Date | string
    hydro: number
    nuclear: number
    solar: number
    thermal: number
    wind: number
  }

  export type Generation_COSUUpdateManyMutationInput = {
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type Generation_COSUUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instant?: StringFieldUpdateOperationsInput | string
    instantDate?: DateTimeFieldUpdateOperationsInput | Date | string
    hydro?: FloatFieldUpdateOperationsInput | number
    nuclear?: FloatFieldUpdateOperationsInput | number
    solar?: FloatFieldUpdateOperationsInput | number
    thermal?: FloatFieldUpdateOperationsInput | number
    wind?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Generation_SINCountOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SINAvgOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SINMaxOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SINMinOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SINSumOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Generation_NorteCountOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NorteAvgOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NorteMaxOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NorteMinOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NorteSumOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SulCountOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SulAvgOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SulMaxOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SulMinOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_SulSumOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NordesteCountOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NordesteAvgOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NordesteMaxOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NordesteMinOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_NordesteSumOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_COSUCountOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_COSUAvgOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_COSUMaxOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_COSUMinOrderByAggregateInput = {
    id?: SortOrder
    instant?: SortOrder
    instantDate?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type Generation_COSUSumOrderByAggregateInput = {
    id?: SortOrder
    hydro?: SortOrder
    nuclear?: SortOrder
    solar?: SortOrder
    thermal?: SortOrder
    wind?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}