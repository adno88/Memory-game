const cards = ["eagle.jpg", "elephant.jpg", "lion.jpg", "panther.jpg", "parrot.jpg", "shark.jpg", "eagle.jpg", "elephant.jpg", "lion.jpg", "panther.jpg", "parrot.jpg", "shark.jpg"];

let card = document.querySelectorAll('card');
card = [...card];



/*
const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');
const c11 = document.getElementById('c11');

c0.addEventListener("click", function() {uncover(0);});
c1.addEventListener("click", function() {uncover(1);});
c2.addEventListener("click", function() {uncover(2);});
c3.addEventListener("click", function() {uncover(3);});
c4.addEventListener("click", function() {uncover(4);});
c5.addEventListener("click", function() {uncover(5);});
c6.addEventListener("click", function() {uncover(6);});
c7.addEventListener("click", function() {uncover(7);});
c8.addEventListener("click", function() {uncover(8);});
c9.addEventListener("click", function() {uncover(9);});
c10.addEventListener("click", function() {uncover(10);});
c11.addEventListener("click", function() {uncover(11);});
*/
var firstVisible = false;
var turn = 0;
var firstVisibleNr;
var block = false;
var pairsLeft = 6;

function uncover(nr) {
    var opacity = $('#c'+nr).css('opacity');
    if(opacity != 0 && block == false) {

        block = true;
        var image = "url(image/"+cards[nr]+")";

        $('#c'+nr).css('background-image', image);
        $('#c'+nr).addClass('uncoverCard');
        $('#c'+nr).removeClass('card');

        if(firstVisible == false) {
            firstVisible = true;
            firstVisibleNr = nr;
            block = false;
        }
        else {
            if(cards[firstVisibleNr] == cards[nr]) {
                hidepair(nr, firstVisibleNr);
            }
            else {
                setTimeout(function() {restoreCards(nr, firstVisibleNr)}, 1000);
            }
            turn++;
            $('.score').html('Turns: '+turn);
            firstVisible = false;
        }
    }
}

function hidepair(nr1, nr2) {
    $('#c'+nr1).css('opacity', '0');
    $('#c'+nr2).css('opacity', '0');
    
    pairsLeft--;

    if(pairsLeft == 0)
    {
        $('.board').html('<h2>You Won! Finished in '+turn+' turns</h2>');
    }

    block = false;
}

function restoreCards(nr1, nr2) {
    $('#c'+nr1).css('background-image', 'url(image/reverse.jpg)');
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('uncoverCard');

    $('#c'+nr2).css('background-image', 'url(image/reverse.jpg)');
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('uncoverCard');
    block = false;
}