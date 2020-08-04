const createKeyExtractor = (key) => (obj) => {
  const accessors = key.split(".");

  const isComposed = !!accessors[1];

  if (!isComposed) return obj[key];

  const getProp = (col, acc) => col[acc];

  const extracted = accessors.reduce(getProp, obj);

  return extracted;
};

const functionMap = (conds) => (x) => {
  for (const [keyFn, valFn] of conds) {
    if (keyFn(x)) return valFn;
  }
};

const subtract = (a, b) => a - b;
const stringComp = (a, b) => a.localeCompare(b);

const defaultCompare = functionMap([
  [Number.isInteger, subtract],
  [String, stringComp],
]);

const createSort = (comparation = defaultCompare) => (path) => (a, b) => {
  const aProp = path ? createKeyExtractor(path)(a) : a;
  const bProp = path ? createKeyExtractor(path)(b) : b;

  const fn = comparation(aProp);

  return fn(aProp, bProp);
};

const arr00 = ["z", "a", "y", "x", "b", "c"];

const stringSort = createSort()("");

const t00 = [...arr00].sort(stringSort);

t00; //[ 'a', 'b', 'c', 'x', 'y', 'z' ]

const abNameSort = createSort()("a.b.name");

const arr01 = [
  {
    a: {
      b: {
        name: "test3",
      },
    },
  },
  {
    a: {
      b: {
        name: "test2",
      },
    },
  },
  {
    a: {
      b: {
        name: "test1",
      },
    },
  },
];

const t01 = [...arr01].sort(abNameSort).map((x) => x.a);

t01; // [ { b: { name: 'test1' } },  { b: { name: 'test2' } }, { b: { name: 'test3' } } ]
