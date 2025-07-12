let count = 0;

const increment = () => {
  count++;
  if (count < 5) {
    setTimeout(increment, 1000);
  }
};

increment();

console.log("Done");
