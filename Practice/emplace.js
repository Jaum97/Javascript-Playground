//https://github.com/tc39/proposal-upsert

if (!map.has(key)) {
  map.set(key, value);
}
map.get(key).doThing();

map.emplace(key, {
  insert: () => value
}).doThing();

// two lookups
old = map.get(key);
if (!old) {
  map.set(key, value);
} else {
  map.set(key, updated);
}
With this proposal:

map.emplace(key, {
  update: () => updated,
  insert: () => value
});
