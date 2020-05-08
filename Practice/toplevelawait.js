//https://v8.dev/features/top-level-await

await Promise.resolve(console.log('🎉'));
// → SyntaxError: await is only valid in async function

(async function() {
  await Promise.resolve(console.log('🎉'));
  // → 🎉
}());




await Promise.resolve(console.log('🎉'));
// → 🎉
