function Person(name, age){
  this.name = name;
  this.age = age;
  this.happy_birthday = function() {
    age++;
    console.log("Happy birthday " + name + ", you are " + age + " years old!");
  }
}

dude = new Person("Bob", 25);
dude.happy_birthday();