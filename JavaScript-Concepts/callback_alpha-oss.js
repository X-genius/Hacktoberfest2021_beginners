// AUTHOR: Aman Baghel
// JavaScript Concept: callback
// GITHUB: https://github.com/X-genius

//Add your JavaScript concept below
// callback is a function which  is passed as an argument to another function, 
// which is invoked inside the outer function to get certain output.
// here process is a function which is passed in another function printTitle as an argument.


//Example of CallBack Function :

const firstFunction = (name , funcCall) => 
{
    console.log(name);
    funcCall();
}

const secondFunction = () => 
{
    console.log("Second Function Call");
}

firstFunction("First Function Call" , secondFunction);

//Output for this code :
//First Function Call
//Second Function Call
