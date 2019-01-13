const fetchApiGreetingPromise = new Promise((resolve, reject) => {
  const timeOutCallback = () => resolve("Hello Zuli");
  setTimeout(timeOutCallback, 3000);
});

const fetchApiGreeting = () => fetchApiGreetingPromise;
const call = (func, ...args) => func(...args);

function* myGenerator() {
  const greeting = yield call(fetchApiGreeting);
  console.log(`${greeting} How are you?`); // process e.g. yield put(recieveGreeting(greeting))
}

/// behind the scenes example, redux-saga will be doing something of this sort
const gen = myGenerator();
const greetingProm = gen.next().value;
greetingProm.then(result => gen.next(result));
