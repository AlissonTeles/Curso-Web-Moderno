function Celular() {
  this.time = 0;
  // Withou bind no
  setInterval(
    function () {
      this.time++;
      console.log(this.time);
    } /*.bind(this)*/,
    1000
  );

  // Works
  setInterval(() => {
    this.time++;
    console.log(this.time);
  }, 1000);

  // Works
  const self = this;
  setInterval(() => {
    self.time++;
    console.log(self.time);
  }, 1000);
}

new Celular();
