//Q1) how to compare two json have the same properties without order?
//a) var obj1 = { name : "Person 1", age : 5}
//b) var obj2 = { age : 5 , name : "Person 1"}


//Arrow function created to chcek whether the keys inside a object is an object
let areObject = (object) => {
    return object !== null && typeof(object) ==="object";  // Return true if key values are object or else return false
}

//Deep Equal arrow function created to check the given array
const deepEqual = (obj1, obj2)  => {
    let obj1keys = Object.keys(obj1);  // keys of object 1 stored in "obj1keys" as a array
    let obj2keys = Object.keys(obj2);  // keys of object 2 stored in "obj2keys" as a array

    if(obj1keys.length !== obj2keys.length) {  // in prior check if the both object has same no of keys if not return false
        return false;
    } 
    for (let objkey of obj1keys)    {   // create a for loop to iterate through each keys on both objects
        let value1 = obj1[objkey]; //
        let value2 = obj2[objkey];
        let areObjects = areObject(value1) && areObject(value2); //
        //recursive call on deepEqual if "areObjects" return true
        //using OR chcek if value is an object call the recursive function if not an object just campare the values are not equal
        if(areObjects && !deepEqual(value1,value2) ||  
        !areObjects && obj1[objkey] !== obj2[objkey])   {
            return false;
        }
    }return true;
}
let obj1 = { name : "Person 1", age : 5, /*interest : {game1 : "cricket", game2 : "footbal"}*/};
let obj2 = { age : 5 , name : "Person 1", /*interest : {game1 : "cricket", game2 : "footbal"}*/};
console.log("Q1) how to compare two json have the same properties without order");
console.log("a) var obj1 = { name : 'Person 1', age : 5} b) var obj2 = { age : 5 , name : 'Person 1'}");
console.log(deepEqual(obj1,obj2));