const getKey = (obj, key) => obj?.[key];

const createKeyExtractor = (key) => (obj) => {
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

const applyToPath = (fn) => (path) => (obj) =>
  fn(createKeyExtractor(path)(obj));

const pipeableFilter = (fn) => (arr) => arr.filter(fn);

const getEvens = pipeableFilter((x) => x % 2 === 0);

const t00 = applyToPath(getEvens)("a.b.c")(obj);

t00;

const pipe = (...fns) => (val) => fns.reduce((cV, cF) => cF(cV), val);

const mergeObjs = (obj1) => (obj2) => Object.assign({}, obj1, obj2);

const getTransformedKey = (transforms) => (cO, [key, value]) => ({
  ...cO,
  [key]: transforms[key]?.(value) || value,
});

const transform = (transforms) => (obj) =>
  Object.entries(obj).reduce(getTransformedKey(transforms), {});

const getGreeting = (name) => `Hello ${name}!`;

const obj2 = {
  name: "Matt",
  gender: "M",
};

const t01 = transform({ name: getGreeting })(obj2);

t01;
