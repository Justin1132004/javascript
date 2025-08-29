// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("global").innerHTML = name1;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Pixel";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Piper (Rest In Peace 2015-2025)"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 3 + 3;
    document.getElementById("addition").innerHTML = "3 + 3 = " + addition;

    let subtraction = 5 - 4;
    document.getElementById("subtraction").innerHTML = "5 - 4 = " + subtraction;

    let multiplication = 6 * 6;
    document.getElementById("multiplication").innerHTML = "6 * 6 = " + multiplication;

    let exponent = 2 ** 2;
    document.getElementById("exponent").innerHTML = "2^2 = " + exponent;

    let division = 4 / 2;
    document.getElementById("division").innerHTML = "4 / 2 = " + division;

    let modulusx = 5;
    let modulusy = 2;
    let modulus = modulusx % modulusy;
    document.getElementById("modulus").innerHTML = "5 % 2 = " + modulus;

    let incrementx = 2;
    incrementx++;
    let incrementz = 1;
    let increment = incrementx;
    document.getElementById("increment").innerHTML = "2 incremented by 1 = " + increment;

    let decrementx = 2;
    decrementx--;
    let decrementz = 1;
    let decrement = decrementx;
    document.getElementById("decrement").innerHTML = "2 decremented by 1 = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10;
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    var x = 10;
    x += 1;
    document.getElementById("plus-equals").innerHTML = "x += 1 = " + x;
    var x = 10;
    x -= 1;
    document.getElementById("minus-equals").innerHTML = "x -= 1 = " + x;
    var x = 10;
    x *= 2;
    document.getElementById("times-equals").innerHTML = "x *= 2 = " + x;
    var x = 10;
    x /= 2;
    document.getElementById("divide-equals").innerHTML = "x /= 2 = " + x;
    var x = 10;
    x %= 4;
    document.getElementById("modulus-equals").innerHTML = "x %= 4 = " + x;
}


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const dogs = ["Pixel", "Piper"];
    document.getElementById("array").innerHTML = dogs;

    let color = "Yellow";
    let vehicle= "Submarine";
    const obj1 = {color:"Yellow", vehicle:"Submarine"};
    document.getElementById("object").innerHTML = "We all live in a " + obj1.color + " " + obj1.vehicle;

}
/*
*/