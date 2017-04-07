let manholeImg = document.querySelector('.manhole-top');
let manholeSound = document.querySelector('#manhole-sound');
let deadpool= document.querySelector(".deadpool");
let evilLaugh = document.querySelector('#evil-laugh');
let blondieMusic = document.querySelector('#blondie-music');
let carImg = document.querySelector('.car');
let tickleSound = document.querySelector('#tickle-sound');
let spiderManImg = document.querySelector('.spiderman');


deadpool.classList.add('hidden');
deadpool.classList.add('jump-bg');

window.addEventListener('load', carFly);
function carFly(){
    evilLaugh.play();
    evilLaugh.addEventListener('ended', startMusic);
    function startMusic(){
        blondieMusic.play();
        carImg.classList.add('carthrow');
    };
    carImg.addEventListener('animationend', hideCar);
    function hideCar(){
        carImg.classList.add('hidden');
        setTimeout(function(){
           manholeImg.classList.add('wiggle');
        }, 1000);
    };

};

manholeImg.addEventListener('click', manholeMoving);
function manholeMoving(){
    manholeSound.play();
    manholeImg.classList.add('movemanhole');
    deadpool.classList.remove('hidden');
    deadpool.classList.add('jump');
    deadpool.addEventListener('animationend', dpChangeBgJump);
    function dpChangeBgJump(){
        deadpool.classList.remove('jump-bg');
        deadpool.classList.remove('jump');
        deadpool.classList.add('translate5vw');
        setTimeout(function(){
            spiderManImg.classList.add('spidermanpeaks');
        }, 3000);
    };
};

deadpool.addEventListener('mouseover', dpTickle);
function dpTickle(){
    deadpool.classList.add('tickle');
    tickleSound.play();
};
deadpool.addEventListener('mouseout', dpTickleRemove);
function dpTickleRemove(){
    deadpool.classList.remove('tickle');
};




