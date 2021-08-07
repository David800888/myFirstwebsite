let Title = document.getElementById("Interests");
let word = document.getElementById("words");
let image = document.getElementById("Img")
let Personality = document.getElementById("change");

function change() {
    Title.innerText = `Personality`
    word.innerText = `If you were wondering just what kinda
     person I am, I would have to say
     .`
    //image.src = ".jpg"
}

let Interests = document.getElementById("refresh")

function refresh() {
    Title.innerText = `Interests`
    word.innerText = `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna
    aliqua. Eget lorem dolor sed viverra
    ipsum nunc. Congue eu consequat ac felis
    donec et odio pellentesque diam. In iaculis
    nunc sed augue lacus viverra vitae congue.
    Ligula ullamcorper malesuada proin libero.`
    image.src = "My_Artwork.jpg" 
}