const circle = document.getElementById('circle');
const btn = document.getElementById('btn')

function colourChange(){
    var changedToColor=randomcolor();
    circle.style.backgroundColor =changedToColor ;
    btn.style.backgroundColor = changedToColor
}

function randomcolor(){
    var hex_chars = '0123456789abcdef'
    var colour_Code = '#'
    while(colour_Code.length < 7){
        var idx = Math.floor(Math.random() * hex_chars.length)
        colour_Code = colour_Code + hex_chars[idx]
    }
    console.log(colour_Code)
    return colour_Code
}


btn.addEventListener('click',colourChange)