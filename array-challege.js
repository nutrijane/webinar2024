const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/
console.log('EVEN NUNBERS:')
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}
console.log('ODD NUBERS:')
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        console.log(arr[i])
    }
}