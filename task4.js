//Q4) https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373


// ///Task 1: Simple Programs todo for variables
// 1. Declare four variables without assigning values and print them in console
let variable1;
let variable2;
let variable3;
let variable4;
console.log(variable1);
console.log(variable2);
console.log(variable3);
console.log(variable4);

// 2. How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar");
var myvar = 1;
console.log(myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = "Shiva";
let lastName = "Aarthi";
let maritalStatus = "Single";
let country = "India";
let age = 28;

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
let fName = "Shiva", lName = "Aarthi", marital_Status = "Single"; country = "India"; currentage = 28; // variables’ names and values separated by commas using just one variable keyword
////let [f_Name, lName, marital_Status, country_ ,currentage] = ["Shiva", "Aarthi", "Single", "India", 28 ];   //the de-structuring algorithm 

// 5. Declare variables and assign string, boolean, undefined and null data types
let var1;// undefined
console.log(typeof(var1));
var1 = "Shiva"//String
console.log(typeof(var1));
var1 = true;
console.log(typeof(var1));
var1 = {} // object
console.log(typeof(var1));
var1 = null // null
console.log(typeof(var1));

let sen1 = "I am 25 years old."
let sen2 = "You are 30 years old."

// 6. Convert the string to integer
let number = "215";
let number1 = parseInt(number);// parseInt()
let number2 = Number(number); // Number()
let number3 = +number; // Plus sign(+)   Unary Operator (+)

// 7. Write 6 statement which provide truthy & falsey values.

// All True
1 == '1';
false == 0;
0 == '';
null == undefined;
[] == false;
!![0] == true;

//All False
false == null;
''==undefined;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;


// Task 2: Simple Programs todo for Operators

// 1. Square of a number
const square = (num) => num *num;
console.log(square(5));


// 2. Swapping 2 numbers
let a = 1;
let b = 2;
[a, b] = [b, a]
console.log(a);
console.log(b);


// 3. Addition of 3 numbers
const addition = (num1,num2,num3) => num1 + num2 + num3;
console.log(addition(2,3,4));


// 4. Celsius to Fahrenheit conversion
const CelsiusToFahrenheit = (temperature) => temperature*(9/5) + 32;    
console.log(CelsiusToFahrenheit(36));


// 5. Meter to miles
const metersToMiles = (length) => length/1609;
console.log(metersToMiles(10).toFixed(5));


// 6. Pounds to kg
const poundsToKg = (weight) => weight/2.205;
console.log(poundsToKg(23).toFixed(4));


// 7. Calculate Batting Average
const battingAverage = (...rest) => {
    let sum = 0;
    let count = 0;
    for(let num of rest)    {
        count+=1;
        sum +=num;
    }
    return sum/count;
}
console.log(battingAverage(45,34,67,23));


// 8. Calculate five test scores and print their average
const scoreAverage = (fiveTestscores) => {
    let sum = fiveTestscores.reduce((curr,prev) => curr + prev)
    
    return sum/5;
}
console.log(scoreAverage([103,67,1,145,98]));


// 9. Power of any number x ^ y.
const powerofNumber = (x,y) => {
    let result = 1;
    for(let i=1;i<=y;i++)   {
        result *= x;
    }return result;
}
console.log(powerofNumber(4,6));


// 10. Calculate Simple Interest
const simpleInterest = (principal,interest,time) => principal + (principal*time*(interest/100));
console.log(simpleInterest(1000,5,3));


// 11. Calculate area of an equilateral triangle
const areaofEquilateraltriangle = (side) => (Math.sqrt(3)/4) * (side*side);
console.log(areaofEquilateraltriangle(34).toFixed(4));


// 12. Area Of Isosceles Triangle
const areaofIsoscelestriangle = (base,height) => (base*height)/2;
console.log(areaofIsoscelestriangle(15,20).toFixed(2));


// 13. Volume Of Sphere
const volumeofSphere = (radius) => (4*Math.PI*Math.pow(radius,3))/3;
console.log(volumeofSphere(5).toFixed(3));


// 14. Volume Of Prism
const volumeofprism = (base,height) => base*height;
console.log(volumeofprism(15,20).toFixed(2));


// 15. Find area of a triangle.
const areaoftriangle = (base,height) => (base*height)/2;
console.log(areaoftriangle(15,20).toFixed(2));


// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product
const discountCalculator = (actulcost,soldcost) => actulcost - soldcost;
console.log(discountCalculator(300,270));


// 17. Given their radius of a circle and find its diameter, circumference and area.
const circle = (radius) => {
    console.log("diameter :", radius*2);
    console.log("circumference :", 2*Math.PI*radius);
    console.log("area :", Math.PI*radius*radius);
}
circle(4);  


// 18.Given two numbers and perform all arithmetic operations.
const calculate = (num1,num2) =>    {
    console.log("addition :", num1 + num2);
    console.log("subtraction :", num1 - num2);
    console.log("multiplication :", num1 + num2);
    console.log("divison :", num1 / num2);
}
calculate(64,16);


// 19.Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");


// 19. Calculate electricity bill?
///E(kWh/day) = P(W) × t(h/day) / 1000(W/kW)
// let unitRate = 10;
// let unitenergyconsumed = (100 * 1)/1000; 
// //Cost($/day) = E(kWh/day) × Cost(cent/kWh) / 100(cent/$)   
// let electricityBill = (unitenergyconsumed * unitRate) *30;
// console.log(electricityBill); ;    
// 20. For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
//E(kWh/day) = P(W) × t(h/day) / 1000(W/kW)
let unitRate = 10;
let unitenergyconsumed = (100 * 1)/1000; 
//Cost($/day) = E(kWh/day) × Cost(cent/kWh) / 100(cent/$)   
let electricityBill = (unitenergyconsumed * unitRate) *30;
console.log(electricityBill); 


// 21. Program To Calculate CGPA

// As discussed in Google Meet, GPA = (Grades in all Subjects) / (Total Subjects)  CGPA= 9.5 × CGPA

const CGPA = (GPA1,GPA2,GPA3,GPA4,GPA5) => {
    let sum = GPA1+GPA2+GPA3+GPA4+GPA5;
    return sum*9.5;

}

// Task 3: Simple Programs todo for Condition , Looping and Arrays
// 1) Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for(let i=0;i<7;i++)    {
    let output =""
    for(j=0;j<i+1;j++)  {
        output+= "#";
    }console.log(output);
}
// 2. Iterate through the string array and print it contents

//       var strArray= ["<option>Jazz</option>",
//       ,"<option>Blues</option>",
//       ,"<option>New Age</option>",
//       ,"<option>Classical</option>",
//       ,"<option>Opera</option>"]
var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]
console.log(strArray.join(""));

//Arrays
// var myarray=[11,22,33,44,55]

// write a code to count the elements in the array . Don’t use length property
var myarray = [11,22,33,44,55];
const length = (array) => {
    let count = 0;
    while (myarray[count] !== undefined) {
        count+=1
    }
    return count;
}
console.log(length(myarray));

// Declare an empty array;
// — — — — — — — — — — — — — — -
let array = [];
// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

// let foods=[]
let foods = ["Briyani","Dhosa","idly","puttu","Chappathi","rotti","Naan","rice","uppuma","pizza",
"sandwitch","subway","burger","Ginger Chicken kabob","Lamp chops","Dal Soup","Curry","Tandoori Chicken","Tandoori fish","Masala"];

// — — — — — — — — — — — — — — — -
// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?

// let foods=[]
foods = ["Briyani","Dhosa","idly","puttu","Chappathi","rotti","Naan","rice","uppuma","pizza",
"sandwitch","subway","burger","Ginger Chicken kabob","Lamp chops","Dal Soup","Curry","Tandoori Chicken","Tandoori fish","Masala"];
console.log(foods.length);
// Find the length of your foods array
console.log(length(foods));

// — — — — — — — — — — — — — — — -

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

// let friends = [
// “Mari”,
// “MaryJane”,
// “CaptianAmerica”,
// “Munnabai”,
// “Jeff”,
// “AAK chandran”
// ];

// function dataHandling(input){
// for (var i = 0; i < input.length; i++) {

// }
// }

// dataHandling(friends);
let friends = [ "Mari" ,"MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
// "Mari" ----> "Munnabai"
function dataHandling(array,friend1,friend2)  {
    for(let i=0;i<array.length;i++)   {
        if(array[i]===friend1) {
            array[i]= friend2;
            continue;
        }else if(array[i]===friend2)   {
            array[i] = friend1;
        }
    }
    return array
}
friends = dataHandling(friends,"Mari", "Munnabai");
console.log(friends);

// — — — — — — — — — — — — — — — -
// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

// const friends = [
// “Mari”,
// “MaryJane”,
// “CaptianAmerica”,
// “Munnabai”,
// “Jeff”,
// “AAK chandran”
// ];

// function dataHandling(input){
// for (var i = 0; i < input.length; i++) {

// }
// }

// dataHandling(friends);

// — — — — — — — — — — — — — — 

const friendlist = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];

function dataHandle(array,friend)   {
    for(let i=0;i<array.length;i++)   {
        if(array[i]===friend) {
            break;
        }else{
            console.log(array[i]);
        }
    }
}
dataHandle(friendlist,"CaptianAmerica");

// Find the person is ur friend or not.

// const friends = [
// “Mari”,
// “MaryJane”,
// “CaptianAmerica”,
// “Munnabai”,
// “Jeff”,
// “AAK chandran”
// ];

// function dataHandling(input, name){
// for (var i = 0; i < input.length; i++) {

// }
// }

// let found = dataHandling(friends,”Jeff”);

// console.log(found);
const friendlist2 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandler(array,friend)   {
    if(array.includes(friend))  {
        return "he is my friend";
    }else{
        return "he is not in my friend list";
    }
}
let found = dataHandler(friendlist2,"Jeff");
console.log(found);

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

// var friends1 = [
// “Mari”,
// “MaryJane”,
// “CaptianAmerica”,
// “Munnabai”,
// “Jeff”,
// “AAK chandran”
// ];

// var friends2 = [
// “Gabbar”,
// “Rajinikanth”,
// “Mass”,
// “Spiderman”,
// “Jeff”,
// “ET”
// ];

// function dataHandling(input){
// //Your code goes here
// }

// dataHandling(friends);

// — — — — — — — — — — — — — — — -

var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];

function datatoHandle (array1,array2)   {
    let newarray = array1 + ","+ array2;
    let sortedArray = newarray.split(",").sort();
    return sortedArray;
}
let totallist = datatoHandle(friends1,friends2);
console.log(totallist);

// — — — — — — — — — — — — — — — -

// 1. Get the first item, the middle item and the last item of the array
    let lengthoflist = totallist.length;
    let mid = Math.ceil(lengthoflist/2)
    console.log(totallist[0]); //1st item
    console.log(totallist[mid]); //mid item
    console.log(totallist[lengthoflist-1]); //last item

// 2. Add your name to the end of the friends array, and add another name to beginning.
totallist.push("shiva");
totallist.splice(0,0,"aarthi");

// 3. Add Mr or Ms to the names in the friends array.
let result = [];
for(let i=0;i<totallist.length;i++) {
    result.push("Mr. " + totallist[i]);
}
console.log(result);

// 4. Concat all the names the friends array and return as comma “,” seperated string.
let string = result.join(",");
console.log(string);
// 5. Find the friends names who has letter ‘a’ and return the list.

function dataHandler(array,a)   {
    if(array.includes(a))  {
        return "he is my friend";
    }else{
        return "he is not in my friend list";
    }
}

console.log(dataHandler(totallist));
// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
function averagelength(array)   {
    let temp = [];
    for(let name of array)  {
        temp.push(name.length);
    }
    let sum = temp.reduce((a,b) => a+b);
    return (sum/temp.length).toFixed(2);
}
console.log(averagelength(totallist));

// 7. Find the names and return the list starting with letter M.
function namewithStr(array,str)   {
    let temp = [];
    for(let name of array)  {
        if(name[0]===str)   {
            temp.push(name);
        }
      return temp; 
    }
}
    
console.log(namewithStr(totallist,"M"));

// 8. Find the name with max characters and return the name.
function maximumChar(array)   {
    let max = array[0];
    for(let name of array)  {
        if(name.length>max)   {
            max = name;
        }
      return max; 
    }
}
    
console.log(maximumChar(totallist));


// 9. Find the name with min characters and return the name.
function minimumChar(array)   {
    let min = array[0];
    for(let name of array)  {
        if(name.length<min)   {
            min = name;
        }
      return min; 
    }
}
    
console.log(minimumChar(totallist));

// /— — — — — — — — — — — — — — — -

// Find the average in the array below.
// Make sure you add only the numbers and do avg.

// const friendsInfo = [6, 12, ‘Mari’, 1, true, ‘Munnabai’, ‘200’, ‘CaptianAmerica’, 8, 10];
const friendsInfo = [6, 12, ,"Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
function checker(friendsInfo)    {
    let list = [];
    for(let info of friendsInfo)  {
        if(typeof info == "number")   {
            list.push(info);
        }
    }
    let sum = list.reduce((a,b) => a+b);
    return (sum/list.length).toFixed(2);
}

console.log(checker(friendsInfo));
// — — — — — — — — — — — — — — — -

// Print the contents of the input variable

// var input = [
// [“0001”, “Roman Alamsyah”, “Bandar Lampung”, “21/05/1989”, “Membaca”],
// [“0002”, “Dika Sembiring”, “Medan”, “10/10/1992”, “Bermain Gitar”],
// [“0003”, “Winona”, “Ambon”, “25/12/1965”, “Memasak”],
// [“0004”, “Bintang Senjaya”, “Martapura”, “6/4/1970”, “Berkebun”]
// ]

// function dataHandling(input){
// for (var i = 0; i < input.length; i++) {
// //Your code goes here

// }
// }

// dataHandling(input);

// — — — — — — — — — — — — — — — -

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ]
function contents(array)    {
    console.log(`${array[0]} Name : ${array[1]} coming from the city ${array[2]} his DOB is ${array[3]} his hobbies are ${array[4]}`);
}

for(let content of input)   {
    contents(content);
}

// Objects:

// What the output

let myobject = {1:one,
           "11":1,"name":"arun"}
//console.log(myobject.11); //throw an error becoz When using dot notation, key names can’t contain spaces, hyphens, or start with a number. 
//console.log(myobject["11"]);
console.log(myobject.name); // ==> arun


// Add a new key value pair to myobject
// key : ten
// value : ten

myobject = {1:"one","11":1,"name":"arun"};
myobject.ten = "ten";
console.log(myobject);

// {"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.

// Write out an object literal to represent the data below.

// Guvi, Geek, 6, IIT-M RP,Chennai.

let codePlatform = {
    fname : "Guvi",
    lname : "Geek",
    age : 6,
    "current address" : "IIT-M RP",
    city : "Chennai."
}

// — — — — — — — — — — — — — — — -
// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.
let topTechie = [
    codePlatform = {
        fname : "Guvi",
        lname : "Geek",
        age : 6,
        "current address" : "IIT-M RP",
        city : "Chennai."
    },
    e_commerce = {
        fname : "Amazon",
        lname : "Inc",
        age : 31,
        "current address" : "SP Infocity",
        city : "Chennai."
    },
    codePlatform = {
        fname : "Google",
        lname : "Alphabet",
        age : 34,
        "current address" : "Amphitheater Parkway",
        city : "MountainView."
    },
    codePlatform = {
        fname : "Tesla",
        lname : "Inc",
        age : 32,
        "current address" : "333 Santana Row",
        city : "San Jose."
    },

]