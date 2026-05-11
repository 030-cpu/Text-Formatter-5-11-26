// function 1 convert all text to uppercase
function uppercase(){
    let value = document.getElementById("textbox").value
    let newValue = value.toUpperCase()
    document.getElementById("result").innerHTML = newValue
}

// //function 2 convert all text to lowercase
function lowercase(){
    let value = document.getElementById("textbox").value
    let newValue = value.toLowerCase()
    document.getElementById("result").innerHTML = newValue
}

// //function 3 capitalize each word
function capitalize(){
    let value = document.getElementById("textbox").value;
    let newValue = value
    .split(" ")
    .map((word)=> word[0].toUpperCase() + word.slice(1))
    .join(" ");
    document.getElementById("result").innerHTML = newValue
}

// //function 4 remove extra spaces
function remove(){
    let value = document.getElementById("textbox").value;
    let newValue = value.trim()
    document.getElementById("result").innerHTML = newValue
}

// //function 5 replace a word
function replace(){
    let value = document.getElementById("textbox").value;
    let word1 = prompt("Enter a word to replace");
    let word2 = prompt("Enter a new word")
    // let newValue = value
    // .map((word)=> word.split() + word.substr())
    let newValue = value.replace(word1, word2)
    document.getElementById("result").innerHTML = newValue
}


// //function 6 count characters
function count(){
    let value = document.getElementById("textbox").value;
    let newValue = value.length
    document.getElementById("result").innerHTML = newValue
}
