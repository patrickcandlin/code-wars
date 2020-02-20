function printFizzBuzz(numbers){
    return numbers.map(number => calculateFizzBuzz(number))
        .map(item => console.log(item))
}
function calculateFizzBuzz(num){
    let numFizzBuz = ''
    const fizz = {
        0: function() { numFizzBuz += 'fizz' },
        1: function(){ null },
        2: function(){ null }
    }
    const buzz = {
        0: function() { numFizzBuz += 'buzz' },
        1: function() { null },
        2: function() { null },
        3: function() { null },
        4: function() { null }
    }
    fizz[num % 3]()
    buzz[num % 5]()
    const result = {
        fizz: function(){
            return numFizzBuz
        },
        buzz: function(){
            return numFizzBuz
        },
        fizzbuzz: function(){
            return numFizzBuz 
        },
        '': function() {
            return num
        }
    }
    return result[numFizzBuz]()
}