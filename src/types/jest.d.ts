declare global {
  const describe: (name: string, fn: () => void) => void;
  const beforeAll: (fn: () => void) => void;
  const afterAll: (fn: (done?: () => void) => void) => void;
  const it: (name: string, fn: () => void | Promise<void>) => void;
  const expect: jest.Expect;
  namespace jest {
    interface Expect {
      <T = any>(actual: T): jest.Matchers<T>;
    }
    interface Matchers<R> {
      toBe(expected: any): R;
      toEqual(expected: any): R;
    }
  }
}

export {}; 