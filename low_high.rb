def low_and_high(numbers)
    sorted_numbers =  numbers.split(' ').map{|num| num.to_i}.sort()
    "#{sorted_numbers.last} #{sorted_numbers.first}"
end

puts low_and_high("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214"
puts low_and_high("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") == "542 -214"