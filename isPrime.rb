def is_prime(num)
    bool = true
    if num < 2
       return bool = false
    end
    if num == 2 || num == 3 || num == 5
       return  bool = true
    end
    if num % 2 == 0 || num % 3 == 0 || num % 5  == 0
       return bool = false
    end
    index = 5
    while index <= Math.sqrt(num)
        if num % index == 0 || num % index + 2 == 0
            return bool = false
        end
        index = index + 1
    end
    bool
end
puts is_prime(958297)
puts is_prime(0), "0 is not prime"
puts is_prime(1), "1 is not prime"
puts is_prime(2),   "2 is prime"
puts is_prime(73),  "73 is prime"
puts is_prime(75),  "75 is not prime"
puts is_prime(-1),  "-1 is not prime"

puts is_prime(3),   "3 is prime"
puts is_prime(5),   "5 is prime"
puts is_prime(7),   "7 is prime"
puts is_prime(41),  "41 is prime"
puts is_prime(5099),  "5099 is prime"

puts is_prime(4),   "4 is not prime"
puts is_prime(6),   "6 is not prime"
puts is_prime(8),   "8 is not prime"
puts is_prime(9),  "9 is not prime"
puts is_prime(-8),  "-8 is not prime"
puts is_prime(45),  "45 is not prime"
puts is_prime(-5),  "-5 is not prime"
puts is_prime(-41),  "-41 is not prime"