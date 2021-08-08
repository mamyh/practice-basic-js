//1.coversation
function feetToInch(feet){
   return feet *12
}
console.log('feet to inch conversation ',feetToInch(12));

// 2.coversation
function centimeterToMeter(centimeter){
   return centimeter *0.01;
}
console.log('centimeter to meter convertion ',centimeterToMeter(1000));

//calculation 
function pageRequirements(book1Quantity,book2Quantity,book3Quantity){
     let book1Pages =100,book2Pages =200,book3Pages =300;
     let totalBook1Pages = book1Pages *book1Quantity;
     let totalBook2Pages =book2Pages * book2Quantity;
     let totalBook3Pages = book3Pages * book3Quantity;
     return totalBook1Pages+totalBook2Pages+totalBook3Pages;
}
console.log('total page is required ', pageRequirements(2,5,9));

// 4.friends
function bestFriends(myFriends){
    let boroFriend='';
    for(let friend of myFriends){
       if(boroFriend.length < friend.length){
           boroFriend = friend;
       }
    }
    return boroFriend;
}
let myFriends=['aftab','sonagj','lsdglksljs','fjlsjdf fsdklfj', 'fksjf ', 'sojal ', 'amar bondu tomar sotru','sonar songsar gelo vengge','Parle tui amake teka . dekhi tui kmn paris fldsfks '];
console.log('my best friend is ',bestFriends(myFriends));
// 5. will stop the loop if the array has any negative number  and return all the positive number before negative number
function onlyPositive(numbers){
    let newNumber =[];
  for(let number of numbers){
      if(number <0){
         break;
      }
      newNumber.push(number);
  }
  return newNumber;
}
var myNubmers =[1,2,4,5,76,878,-34,43,657,987,9,8,23265,6,5,878,];
console.log('my positive number is ',onlyPositive(myNubmers));