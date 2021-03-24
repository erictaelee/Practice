# numbers = [1, 2, 4, 2]
# doubled_numbers = []
# numbers.each do |number|
#   doubled_numbers << number * 2
# end
# p doubled_numbers


numbers = [1, 2, 4, 2]
new_numbers = numbers.map do |number|
  number * 2
end
p new_numbers

numbers = [1, 2, 4, 2]
p numbers.map {|number| number * 2}


items = [
  {id: 1, body: 'foo'},
  {id: 2, body: 'bar'},
  {id: 3, body: 'foobar'}
]
# p items[0][:id]

p items.map {|item| item[:id]}
  
  
fruits = [
  {"name" => "apple", "color" => "red"},
  {"name" => "banana", "color" => "yellow"},
  {"name" => "grape", "color" => "purple"}
]

# {"apple" => "red", "banana" => "yellow", "grape" => "purple"}

# p fruits[0]["name"], fruit[0]["color"]