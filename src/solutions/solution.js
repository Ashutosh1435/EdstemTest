 export function Solution(n, k, b){
    const a = new Array(n).fill(0);
    const cache = new Array(n).fill(0);

    b.sort((a, b)=> b-a);

    while(true){
        let taken = 0;
        for(let i=0; i<n; i++){
            if(taken>=k){
                break;
            }
            if(cache[i]===0){
                a[i]++;
                taken++;
            }  
            
            if(a[i] === b[i]){
                cache[i] = 1;
            }          
        }
        console.log(cache, a, taken, b);
        const isValid = isValidArray(a, b);
        if(!isValid || taken<k ){
            return false;
        }
        if(isValid && isBothEqual(cache)){
            return true;
        }
    }
    
}

function isBothEqual(a){
    for(let i =0;i< a.length; i++){
        if(a[i] === 0)
            return false;
    }
    return true;
}

function isValidArray(a, b){
    for(let i =0; i<a.length; i++){
        if(a[i]>b[i]){
            return false;
        }
    }
    return true;
}


// console.log(Solution(5, 3, [5, 4, 3, 2, 1]));
// console.log(Solution(3, 2, [4, 1, 1]));
// console.log(Solution(5, 3, [1, 2, 3,4 ,5]));