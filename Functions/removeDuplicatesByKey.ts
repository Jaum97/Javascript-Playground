const arr = [
  {
    name: "john",
    age: 20,
    city: "São Paulo",
  },
  {
    name: "dave",
    age: 20,
    city: "New York",
  },
  {
    name: "john",
    age: 25,
    city: "São Paulo",
  },
  {
    name: "roberto",
    age: 25,
    city: "São Paulo",
  },
];

const stringReducer = (str, next) => `${str}${next}`;

const objValueReducer = (obj) => (str, next) => `${str}${obj[next]}`;

const pipeableReduce = (fn, init: any = []) => (arr) => arr.reduce(fn, init);

const pipe = (...fns) => (init) => fns.reduce((cV, cF) => cF(cV), init);

const flip = (fn) => (arg1) => (arg2) => fn(arg2, arg1);

function filterDuplicatesByKeys<K extends string>(
  keys: K | K[]
): <O extends { [Key in K]: O[Key] }>(arr: O[]) => O[];

function filterDuplicatesByKeys(keys) {
  return function (arr) {
    const isArr = Array.isArray(keys);

    const removeDuplicatesReducer = (hash, obj) => {
      const createIdentifier = pipeableReduce(objValueReducer(obj), "");

      const identifier = isArr ? createIdentifier(keys) : obj[keys];

      return hash[identifier] ? hash : { ...hash, [identifier]: obj };
    };

    const removeDuplicates = pipeableReduce(removeDuplicatesReducer, {});

    return pipe(removeDuplicates, Object.values)(arr);
  };
}

const filterDuplicatesByKeys2 = (keys) => (arr) => {
  const res = {};

  const isArr = Array.isArray(keys);

  for (const obj of arr) {
    const fn = (col, cur) => `${col}${obj[cur]}`;

    const identifier = isArr ? keys.reduce(fn, "") : obj[keys];

    if (!obj[identifier]) res[identifier] = obj;
  }

  return res;
};

const t00 = filterDuplicatesByKeys(["age", "city"])(arr);

t00;
