let stickFigure = document.querySelector('.robot')

const changeColor  =() =>{
    let color = prompt("Type a color")
    let page = document.querySelector('body')
    page.style.backgroundColor = color;
}



// ----> This function is reusable and can change the background based on the color its given as a PARAMETER.
const changePicture = ( link ) => {
    stickFigure.setAttribute('src',link)
}
    const music = ()=>{
        changePicture('https://media3.giphy.com/media/u6KfSahi06rz8VdJlQ/giphy.gif?cid=6c09b9520jk8sb54f0vm3kgnvypg48ciaml8kce0xb895ss5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s')
    }  
    const run = () =>{ 
        changePicture('https://i.pinimg.com/originals/6d/25/04/6d250437f993c33be10ce669ed473bfc.gif')
    }
    const karateMode = () => {
        changePicture('https://media1.tenor.com/m/YaoiRO5sMbIAAAAC/stick-figure.gif')
    }
    const flip =() =>{
        changePicture('https://64.media.tumblr.com/284bcbb352e7c04553dec66365c1f01d/350938bef123bc81-03/s400x600/b59945cb71f94e3429d8b7e0b3d6da6a70675c80.gif')
    }
 // I call the function changePicture INSIDE of the other functions to use its instruction AGAIN. -REUSABILITY- 
// -----------------------------------------------------


 let box = document.querySelector('.numContainer')
let currentNumber ;

 const showNumber = () => {
    box.innerHTML=""
    let givenNum = prompt("Choose a Number")
    box.append(givenNum)
    currentNumber = givenNum
 }

 const getNumber = () => {
    console.log(currentNumber)
    box.innerHTML = ""
    box.append(currentNumber * 2)
 }



//  ---------------ASSIGNMENT
// Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.


// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.


// Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.


// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.


// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.


// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.


// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".


// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.


// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].