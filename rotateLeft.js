function rotLeft(a, d) {
    let copy = a.slice()
    for(let index = 0; index < d; index = index + 1){
        let item = copy.shift()
        copy.push(item)
    }
    return copy

}