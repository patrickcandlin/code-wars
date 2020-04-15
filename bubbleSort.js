function countSwaps(a) {
    let count = 0
    let first = a[0]
    let last = a[0]
    let n = a.length
    function swap(larger, smaller){
        let largerIndex = a.indexOf(larger)
        let smallerIndex = a.indexOf(smaller)
        a.splice(smallerIndex,1)
        a.splice(largerIndex,0,smaller)
    }
    for (let i = 0; i < n; i++) {
        if(a[i] < first) first = a[i]
        if(a[i] > last) last = a[i]
        for (let j = 0; j < n; j++) {
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1]);
                ++count
            }
        }
        
    }
    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)
    
}