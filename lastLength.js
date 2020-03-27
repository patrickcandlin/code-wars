function lastLength(s){
    const syms = ['!'] //
    let currentString = ''

    for(let index = 0; index < s.length; index++){
        
        console.log('hello')
       if(!syms.includes(s[index])){ 
           s[index] === ' '
            ? currentString = ''
            : currentString += s[index]
        }
    }

    return currentString.length
}

console.log(Array.from('hello world'))


console.log(lastLength('hello world!'), 5)
console.log(lastLength('hello'), 5)
console.log(lastLength('hello '), 0)
console.log(lastLength(' hello '), 0)
console.log(lastLength('fart fart'), 5)
console.log(lastLength(' jahklsdfjh alksdjhflkjs @$@#$ .    '), 5)
console.log(lastLength(' hello Ahmed'), 5)
console.log(lastLength(' hello Patrick'), 5)
console.log(lastLength(' hello $$$$'), 5)
console.log(lastLength(' hello $$$$'), 5)

