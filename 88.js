let obj = {
  a: 10,
  b: () => {
    console.log(this.a);
  },
  c: function() {
    console.log(this.a);
  }
};

obj.b(); // ?
obj.c(); // ?
