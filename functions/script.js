"use strict"

//Ex1
// I print an array
// Write an algorithm which prints everything in an array.
function printArray(arr){
    arr.forEach(element => {  // For each element in array : 
        console.log(element);  // output this element
    });
}
let tab = [890, 66, 2, 3, 1,  4, 5];
//printArray(tab);

//--------------------------
// Ex2
// III - minimum
// Write an algorithm which receives an array of integers and prints its minimum.
function min(arr){
    let min = arr[0]; //i give the first element value to min
    for (let index = 1; index < arr.length; index++) {  //for each element of array :
        if(arr[index]<= min){ //if the next element is smaller than min :
            min = arr[index]; // min takes the value of this element
        }
    }
    console.log(min);
}
//min(tab);

//--------------------------
// Ex3
// IV - minimum position
// Write an algorithm which receives an array of integers and prints the position of its minimum.
function minPos(arr){
    let min = arr[0];
    let pos;
    for (let index = 1; index < arr.length; index++) {
        if(arr[index]<= min){
            min = arr[index];
            pos = index;  // same of previous ex, but i save the position of the smaller element
        }
    }
    console.log(pos);
}
//minPos(tab)

//--------------------------
// Ex4
// V - ordered array
// Write a algorithm which receives an array of integers 
//and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.
function ordered(arr){
    let nb = arr[0];  // i give the first element value to my variable
    for (let i = 1; i< arr.length; i++) { //for each element in my array
        if(arr[i]>nb){  //if the next element is bigger than the previous
            nb = arr[i]; // at the moment, the list is ordered
        }
        else{return false}  // if not : return false without testing the rest of the array
    }
    return true; // if the loop finished withoud finding false we return true.
}
let ordertab = [8,22,90,8];
// console.log(ordered(ordertab));

//--------------------------
// Ex5
// IV - even numbers
// Write an algorithm which prints all the even numbers from 0 to a given number.
function evenNumbers(array){
    array.forEach(element => {
        if(element%2==0){
            console.log(element);
        }
    });
}
