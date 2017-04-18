let manholeImg = document.querySelector('.manhole-top');
let manholeSound = document.querySelector('#manhole-sound');
let deadpool= document.querySelector(".deadpool");
let evilLaugh = document.querySelector('#evil-laugh');
let blondieMusic = document.querySelector('#blondie-music');
let carImg = document.querySelector('.car');
let tickleSound = document.querySelector('#tickle-sound');
let spiderManImg = document.querySelector('.spiderman');
let spiderman = document.querySelector('.spiderman-top');
let shootBtn = document.querySelector('.shoot-btn');
let boomBtn = document.querySelector('.boom-btn');
let gunFlagOut = document.querySelector('.gunflag');
let flagImg = document.querySelector('#flag');
let explosionVideo = document.querySelector('.explosion');
let bombSound = document.querySelector('#grenade-explosion')
let bombClock = document.querySelector('#bomb-beep');


explosionVideo.classList.add('hidden');
shootBtn.classList.add('hidden');
boomBtn.classList.add('hidden');
gunFlagOut.classList.add('hidden');
/*manholeImg.classList.add('hidden');*/

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
        }, 2000);
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

spiderManImg.addEventListener('animationend', spidermanFromTop);
function spidermanFromTop(){
    setTimeout(function(){
        spiderman.classList.add('slidedown')}, 1500);
        spiderman.addEventListener('animationend', spidermanChangeBg);
        function spidermanChangeBg(){
            spiderman.classList.add('smchangebg');
            spiderman.classList.remove('slidedown');
            shootBtn.classList.remove('hidden');
            boomBtn.classList.remove('hidden');
        };
};

shootBtn.addEventListener('click', shotEvent);
function shotEvent(){
    gunFlagOut.classList.remove('hidden');
    deadpool.classList.add('shootbg');
    setTimeout(function(){
        flagImg.classList.add('flagmove');
    }, 500);
};

boomBtn.addEventListener('click', explosionEvent);
function explosionEvent(){
    bombClock.play();
};

bombClock.addEventListener('ended', explosionStarts);
function explosionStarts() {
bombSound.play();
    explosionVideo.classList.remove('hidden');
};
