class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def happy_birthday
    @age+= 1
    puts "Happy birthday #{@name}, you are #{@age} years old!"
  end
end

dude = Person.new("Bob", 25)
dude.happy_birthday;
