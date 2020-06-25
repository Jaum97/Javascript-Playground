//https://github.com/tc39/proposal-throw-expressions

function save(filename = throw new TypeError("Argument required")) {}

lint(ast, { 
  with: () => throw new Error("avoid using 'with' statements.")
});
