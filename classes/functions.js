function power(num, power){
    if(power == 0){
        return 1
    }else{
        num = num * power(num, power)
    }
}


function pwr(number, power){
    let num=number
    while(power >1){
        num = number * num
        power--
    }
    console.log(number, "raised to", power, " is ", num )
}



pwr(5,2)