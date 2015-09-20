


breakfasts = ["Eggs!", "Eagle Eggs!!", "Pizza", "Potato chips", "Pancakes", "Cereal", "Cookies" ]

# #grouped by first letter

# first_letter_enum = breakfasts.group_by { |breakfast|
#   breakfast[0]}

# puts first_letter_enum

# #grouped by length

# length_enum = breakfasts.group_by {|breakfast|
#   breakfast.length}

# puts length_enum

#grouped by common element "!"

common_element_enum = breakfasts.group_by { |breakfast|
  breakfast.include? "!"
}

puts common_element_enum