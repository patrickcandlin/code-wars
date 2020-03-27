var strStr = function(haystack, needle) {
    if(!needle) return 0
    const needleLength = needle.length
    
    for(let index = 0; index < haystack.length; index++){
        if(needle === haystack.slice(index, needleLength + index)){
            return index
        }
    }
    
    return -1
    
};