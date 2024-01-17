const celular = {
  helloWorld: "Ola Mundo",
  speak() {
    console.log(this.helloWorld);
  },
};

celular.speak();
const falar = celular.speak;
falar();

const bindFalar = celular.speak.bind(celular);
// Amarra, cria uma ligação, assim podemos definir qual é o this correto que estamos nos referindo
bindFalar();
