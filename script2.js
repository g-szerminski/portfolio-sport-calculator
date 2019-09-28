class Animal {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  breath() {
    console.log("Zwierzę oddycha");
  }
}
const zwierze = new Animal(3);

class Mammal extends Animal {
  constructor(age, name, hair) {
    super(age, name);
    this.hair = hair;
  }
  drinkMilk() {
    console.log("Ssaki piją mleko");
  }
  speak() {
    console.log("Ssak mówi: fjkdfjkjfkksfjkj");
  }
}
const ssak = new Mammal(7, "Maks", "blond");

class Human extends Mammal {
  constructor(age, name, hair, language) {
    super(age, name, hair);
    this.language = language;
  }
  speak() {
    console.log("Człowiek mówi");
  }
}
const human = new Human(38, "Szerman", "blond", "polski");

ssak.breath();
ssak.drinkMilk();
human.drinkMilk();
human.speak();
ssak.speak();
