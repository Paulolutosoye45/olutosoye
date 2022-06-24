function ageindays() {
    var birthYear = prompt('what year were you born');
    var ageindayss = (2018 - birthYear) * 365;
     var h1 = document.createElement('h1');
     var textAnswer = document.createTextNode('you are ' + ageindayss + 'days');
     console.log(ageindayss);
     h1.setAttribute('id', 'ageindays');
     h1.appendChild(textAnswer);
     document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageindays').remove();
}

// challenge 2: cat generator
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "copy of download.png";
    div.appendChild(image);
}