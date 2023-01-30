const cards = ["eagle.jpg", "elephant.jpg", "lion.jpg", "panther.jpg", "parrot.jpg", "shark.jpg", "eagle.jpg", "elephant.jpg", "lion.jpg", "panther.jpg", "parrot.jpg", "shark.jpg"];

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

const firstVisible = false;
const turn = 0;

function uncover(nr) {
    var image = "url(image/"+cards[nr]+")";
    $('#c'+nr).css('background-image', image);
}

/* const card = document.querySelectorAll('.card');

function uncover() {
    show = this.textContent;
    alert(show);
}

card.forEach((nr) => {
    nr.addEventListener('click', uncover)
})
*/

