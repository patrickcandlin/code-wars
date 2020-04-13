function freqQuery(queries) {
    const tallyObj = {}
    const freqObj = {}
    const results = []

    const dispatch = {
        1: function(num){
            if(tallyObj[num] > -1){
                tallyObj[num] += 1
                if(freqObj[tallyObj[num]] !== undefined){
                    freqObj[tallyObj[num]].push(num)
                } else{
                    freqObj[tallyObj[num]] = [num]
                }//stuff in here at this point
            } else{
                tallyObj[num] = 1
                if(freqObj[tallyObj[num]] !== undefined){
                    freqObj[tallyObj[num]].push(num)
                } else{
                    freqObj[tallyObj[num]] = [num]
                }
            }
        },
        2: function(num){
            if(tallyObj[num] > -1){
                tallyObj[num] -= 1
                if(freqObj[tallyObj[num]] !== undefined){
                    freqObj[tallyObj[num]].push(num)
                } else{
                    freqObj[tallyObj[num]] = [num]
                }
            } else{

            }
        },
        3: function(frequency){
            // console.log(tallyObj)
            // console.log(freqObj)
            if(freqObj[frequency] === undefined){
                results.push(0)
            }
            else { 
                if (freqObj[frequency]
                .filter(num => tallyObj[num] === frequency)
                .length){
                    results.push(1)
                } else {
                    results.push(0)
                }
            }
        }
    }
    queries.map(query => dispatch[query[0]](query[1]))
    
    return results
}