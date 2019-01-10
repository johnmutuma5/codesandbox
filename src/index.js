const fetchApiGreetingPromise = new Promise((res, rej) => {
  const timeOutCallback = () => res("Hello Ronnie");
  setTimeout(timeOutCallback, 5000);
});

const fetchApiGreeting = () => fetchApiGreetingPromise;

function* myGenerator() {
  const greeting = yield fetchApiGreeting();
  console.log(greeting); // process e.g. yield put(recieveGreeting(greeting))
}

/// behind the scenes example, redux-saga will be doing something of this sort
const gen = myGenerator();
const greetingProm = gen.next().value;
greetingProm.then(result => gen.next(result));
