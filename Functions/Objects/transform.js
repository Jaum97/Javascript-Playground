const getKey = (obj, key) => obj?.[key];

const getPath = (key) => (obj) => {
  if (!key) return undefined;

  const accessors = key.split(".");

  const isComposed = !!accessors[1];

  if (!isComposed) return obj[key];

  return accessors.reduce(getKey, obj);
};

const obj = {
  a: {
    b: {
      c: [1, 2, 3, 4, 5, 6],
    },
  },
};

const applyToPath = (fn) => (path) => (obj) => fn(getPath(path)(obj));

const pipeFilter = (fn) => (arr) => arr.filter(fn);

const getEvens = pipeFilter((x) => x % 2 === 0);

const t00 = applyToPath(getEvens)("a.b.c")(obj);

t00;

const pipe = (...fns) => (val) => fns.reduce((cV, cF) => cF(cV), val);

const mergeObjs = (obj1) => (obj2) => Object.assign({}, obj1, obj2);

const transformKey = (transform) => (cO, [key, val]) =>
  mergeObjs(cO)({ [key]: transform[key]?.(val) || val });

const pipeReduce = (fn, initial) => (arr) => arr.reduce(fn, initial);

const transformReducer = (transform) => pipeReduce(transformKey(transform), {});

const transform = (obj) => pipe(Object.entries, transformReducer(obj));

const getGreeting = (name) => `Hello ${name}!`;

const greetingTransform = { name: getGreeting };

const obj2 = {
  name: "Matt",
  gender: "M",
};

const t01 = transform(greetingTransform)(obj2);

t01;
