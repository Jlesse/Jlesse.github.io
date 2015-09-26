class Person

  def initialize(age,name,location,hunger)
    @age = age
    @name = name
    @location = location
    @hunger = hunger
  end

  def eat(food_item)
    if @hunger
      puts "Yum yum, I was hungry. That was good #{food_item}!"
      @hunger = false
    else
      puts "I'm not hungry!"
    end
  end

  def work
    puts "work work!"
  end

  def sleep
    if @hunger
      puts "I am to hungry to sleep! feed me!"
    else
      puts "ZZZZZZZ(snore)"
    end
  end
end

dude = Person.new(25,"theDude","Chicago",true)
dude.work
dude.sleep
dude.eat("eggs")
dude.sleep