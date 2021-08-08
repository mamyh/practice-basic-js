//write 3 varriables 
var myName = "Mamun";
var myNumber = 2;
var myboolean =true;

//variable using let,const
let letNumber = 23;//mutable 
const constNumber =10;//immutable(unchanged)
letNumber =35;

let  i = 7 ; 
while(i <=19){
    // console.log(i);
    i++;
}
var myFriends =['sojal','dajol','hojol','fozol','azol'];
for(let friend of myFriends){
    if(myFriends.indexOf(friend) == 4){
        myFriends[4] ="Mamun";
        
    }
    console.log(friend);
}
console.log(myFriends)
function biggerNumber(myNumber){
   for(let number of myNumber){
       if(number>80){
           console.log(number);
       }
   }
}
var myNumber =[12,432,546,1,2,123,32,54,765,786,89,56,45,2,3];
biggerNumber(myNumber);
function multiplication(one,two,three){
    return one * two * three;
}
console.log(multiplication(1,5,7));