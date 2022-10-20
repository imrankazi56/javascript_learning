let objectSachin={//object Create.
    fullName:"Sachin Tendulkar",
    
    age:42,
    isMarried:true,
    mobileNumber:9730936655,
    address:{
        street:"AS club",
        pincode:123456,
        city:"pune",
        state:"Maharashtra",
    },
    eat:function(){//using function update.
        console.log("I am Vegiterian");
        console.log(this.fullName,this.age);
        let personDetails=`Details are:${this.fullName},${this.age},${this.address.state}`;
        return personDetails;
    }
}

console.log(Object.entries(objectSachin));//how many in entry in object.
console.log(Object.keys(objectSachin));//knows key in object.
console.log(Object.values(objectSachin));//knows values in object.

objectSachin.eat();//functiomn calling using this keyword.
console.log("=======================================");
console.log(objectSachin.eat()); 
console.log(objectSachin.address.landmark);
console.log(typeof objectSachin);
console.table(objectSachin.address);
console.log(objectSachin.address.city);//nested object log

objectSachin.pincode=123456;
objectSachin.proffesion="Cricket";
console.log(objectSachin);//object log.
objectSachin.fullName="Sachin Ramsh Tendulkar";//update object
delete objectSachin.age//delete property.


let sachinFullName= objectSachin.fullName
console.log(sachinFullName);
console.log(objectSachin.city);
console.log(objectSachin.isMarried);
console.log(objectSachin.mobileNumber);
console.log(objectSachin["age"]);//using property Name Assign.
console.log(objectSachin.pincode);
console.log(objectSachin.proffesion);
console.log(objectSachin.fullName);
console.log(objectSachin.age);
console.log(objectSachin.address.state);