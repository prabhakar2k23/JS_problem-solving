async function foo() {
  console.log(1);
  await bar();
  console.log(3);
}

async function bar() {
  console.log(2);
}

foo();
console.log(4);
