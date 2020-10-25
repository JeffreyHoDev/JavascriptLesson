// Consider you got 3 promises, below are some ways
// Parallel - Together
// Sequential - One after another
// Race - Whichever come back first, ignore the others

const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));
// This simply return to us a promise
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

console.log(a(),b(),c()) // Promises


// Parallel
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)

// Race
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}


// Sequence
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}


// The order doesnt matter here
sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)