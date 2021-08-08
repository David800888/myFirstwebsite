let Title = document.getElementById("Interests");
let word = document.getElementById("words");
let image = document.getElementById("Img")
let Personality = document.getElementById("change");

function change() {
    Title.innerText = `Personality`
    word.innerText = `If you were wondering just what kinda
     person I am, I would have to say I'm
     an introvert. I never know how to start
     a conversation with people or what exactly
     I should talk about. But if I know the
     person well enough, I don't worry about that.
     When I am not awkward, I am a weirdo who you
     can't shut up. Trust me on this.`
    image.src = "Scary.jpg"
}

let Interests = document.getElementById("refresh")

function refresh() {
    Title.innerText = `Interests`
    word.innerText = `When I am not coding on my computer,
    I am doing some gaming. I may not be good
    at smash bros, but I think I am a good Ness
    main. When I am not gaming, I am most likely
    drawing. To the left you can see one of my
    drawings. I don't know why I did this
    but I liked how it turned. I also enjoy
    reading adventure books like Percy Jackson.`
    image.src = "My_Artwork.jpg" 
}

let FOOOOOD = document.getElementById("hunger")

function hunger() {
    Title.innerText = `FOOOOOD`
    word.innerText = `Another interest of mine has to be,
    food. I can eat just about anything and I
    love to eat everything. My favorite snack
    has to be nachoes because of the mix of
    ingredients and the multitude of flavors.
    I also like ribs and steak and how great
    they can go with barbeque sauce. And chocolate
    is a favorite of mine to, especially white
    chocolate, it is the best, no contest.`
    image.src = "Nachos.jpg" 
}