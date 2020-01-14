function checkMagazine(magazine, note) {
    let mag = {}
    magazine.map(word => {
        if(mag[word]){
            mag[word] += 1
        }else {
            mag[word] = 1
        }
     } )
    let noteCheck = note.map(word => {
        if(mag[word] > 0){
            mag[word] -= 1
            return true
        }else{
            return undefined
        }
    })
    if(noteCheck.includes(undefined)){
        console.log('No')
    }else{
        console.log('Yes')
    }
}