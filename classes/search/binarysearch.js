function binarySearch(array, value ){
    let mid = array.length / 2
    
    if(value > array[mid]){
        console.log("value found here ", mid)
        for(let i=mid; i< array.length; i++){
            if(value == array[i]){
                console.log("value found at ", i)
            }
        }
    } 
    else{
        for(let i = 0; i<=mid; i++){
            if(value == array[i]){
                console.log("value found at ", i)
            }
        }
    }
}



let list = [1,2,3,4,5,6,7,8,12,14,15,16,23,25,36,46,57,81];
let value = 36;


binarySearch(list,value);