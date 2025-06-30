Day -1

#earlier version of javascript we will be able to create and make a use of web pages 

#After ES6 with the help of ES^ we will be able to create mobile, web, and desktop apps as well

ES6 Variables
    var a- variable

    var snacks = "chocolates";


Scopes
    1.Global scope
    declared as global variable it can be accessed through out the script file
    2. Local scope
    inside a block


    important
    var key word only supports the functions scope 
            
            fucntion data(){
                //function scope




                var i = 10;                
            }
        block scope
        if(){
            //block scope
        }

        for(){
            //block scope
        }

        while(){
            //block scope
        }
            console.log()

RULES

//var

if you dint define them, it would be assigned to the global object

if you're using var outta function or function scope, it belongs to the global scope

if you're using var inside of a function, it belongs to the function scope

if you're using var inside of a block i.e if, for, loop that particular variable will still available out of block


//let

if you're using let inside of a block i.e if, for, loop that particular variable will not be accessable it throws reference error

Day-2