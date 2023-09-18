//q1
 var arr=[[],[]];
//q2
var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(arr[0]+"<br>");

document.write(arr[1]+"<br>");
document.write(arr[2]);
//q3
 for(var i=1; i<=10;i++){
    console.log(i)
}
//q4
 var number=+prompt("Enter a number to show its multiplication number")
 var table_length=+prompt("Enter the length of the table")
 for( var i=1; i<=table_length;i++){
     console.log(number + "x" + i + "=" + number*i);
// }
//q5
 var fruits = ["apple", "banana", "mango", "orange","strawberry"];
 console.log(fruits);
 for(i=0;i<fruits.length;i++ ){
    console.log("The element at index"+" "+ i+ " " + "is" +" "+fruits[i]);
 }
//q6
//a counting
 var i;
 for(i=1;i<=15;i++){
     document.write("Counting:"+i);
 }
//b reverse
 var i;
 for (i=10;i>=1;i--){
     console.log("REVERSE"+" "+i);
 }
//c even
 var i;
 for(i=0;i<=20;i+=2 ){
     console.log(i);
 }
//d odd
 var i;
 for(i=1;i<=20;i+=2 ){
     console.log(i);
 }
 }
//e series
 var i;
 for(i=2;i<=20;i+=2 ){
     console.log(i+"k");
 }
//q7
 var snacks=["cake","apple","pie", "cookie", "chips", "patties"]
 var userInput=prompt("Welcome to Delizia! What do you want to order?");
 var found=false;
 for(var i=0;i,snacks.length;i++){
     if(snacks[i]===userInput){
         found=true;
         break;
//     }
 }
 if(found){
     alert(userInput+"is avaivable in our bakery");
 }
 else{
     alert("We are sorry"+" "+userInput+"is not avaiable in the bakery");
 }
//q8
var A=[24,53,78,91,12];
var max=A[0];
for(var i=1; i<A.length;i++){
    if(A[i] > max){
        max=A[i];
    }
}
console.log("The largest number in this array is:"+" "+max);
//q9
var A=[24,53,78,91,12];
var min=A[0];
for(var i=1; i<A.length;i++){
    if(A[i] < min){
        min=A[i];
    }
}
console.log("The smallest number in this array is:"+" "+min);
//q10
var i;
for(i=1;i<=100;i++){
    if(i%5===0){
        console.log(i);
    }
} 
 }
