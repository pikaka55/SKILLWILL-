// Task 1

function LOL(num1,num2,...numbers)
{
    let mult=1;
    for(i of numbers){
        mult*=i
    }
    return [num1+num2, mult]   
}
console.log(LOL(1,2,3,4,5,6,7,8,9,10));

// Task 2 

const user={
    name:'irakli'
}
const{address:{city}={city:'Tbilisi'}}=user
console.log(city)
 
// Task 3

const user10={
    name:'Irakli',
    address:{
        city:'gori'
    }

}

const user2={...user10,}
user2.address.city='Paris'

console.log(user10.name, user10.address.city)