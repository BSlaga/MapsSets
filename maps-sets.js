//1
//new Set([1,1,2,2,3,4])
//set{1,2,3,4}

//2
//[...new Set("referee")].join("")
//set{ref}

//3
//let m = new Map();
//m.set([1,2,3], true);
//m.set([1,2,3], false);
//m([1,2,3], false)

//4
//hasDuplicate([1,3,2,1]) // true
//hasDuplicate([1,5,-1,4]) // false
function hasDuplicate(arr){
    let hasDuplicate1 = new Set(arr);
    if(hasDuplicate1.size === arr.length){
        return false
    }else{
        return true
    }
}

//5
//vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount('Colt') // Map { 'o' => 1 }

function vowelCheck(char){
    return 'aeiou'.includes(char)
}

function vowelCount(str){
    const vMap = new Map();
    for(let char of str){
        let lowerCase = char.toLowerCase();
        if(vowelCheck(lowerCase)){
            if(vMap.has(lowerCase)){
                vMap.set(lowerCase, vMap.get(lowerCase) + 1);
            }else{
                vMap.set(lowerCase, 1);
            }
        }
    }
    return vMap
}