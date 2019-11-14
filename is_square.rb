def is_square(num)
    if(num < 0)
        return false
    else
    Math.sqrt(num).floor() == Math.sqrt(num).ceil()
    end
end



puts is_square(-1), false, "-1: Negative numbers cannot be square numbers"
puts is_square( 0), true, "0 is a square number (0 * 0)"
puts is_square( 3), false, "3 is not a square number"
puts is_square( 4), true, "4 is a square number (2 * 2)"
puts is_square(25), true, "25 is a square number (5 * 5)"
puts is_square(26), false, "26 is not a square number"