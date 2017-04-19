let manholeImg = document.querySelector('.manhole-top');
let manholeSound = document.querySelector('#manhole-sound');
let deadpool= document.querySelector(".deadpool");
let evilLaugh = document.querySelector('#evil-laugh');
let blondieMusic = document.querySelector('#blondie-music');
let carImg = document.querySelector('.car');
let tickleSound = document.querySelector('#woho-sound');
let spiderManImg = document.querySelector('.spiderman');
let spiderman = document.querySelector('.spiderman-top');
let shootBtn = document.querySelector('.shoot-btn');
let boomBtn = document.querySelector('.boom-btn');
let gunFlagOut = document.querySelector('.gunflag');
let flagImg = document.querySelector('#flag');
let cloud1 = document.querySelector('.cloud1');
let cloud2 = document.querySelector('.cloud2');
let cloud3 = document.querySelector('.cloud3');
let cloud4 = document.querySelector('.cloud4');
let startBtn = document.querySelector('.start-btn');
let mainContainer = document.querySelector('.main-container');
let title = document.querySelector('.title');
let startbutton = document.querySelector('.start-button');
let explosionVideo = document.querySelector('.explosion');
let bombSound = document.querySelector('#grenade-explosion')
let bombClock = document.querySelector('#bomb-beep');
let credits = document. querySelector('.finalCredits');
let graffitybtn = document.querySelector('.graffity');
let selfieFinshed = document.querySelector('.finished-selfie');
let selfieBG = document.querySelector('.backgroundselfie');

selfieBG.classList.add('hidden');
explosionVideo.classList.add('hidden');
credits.classList.add('hidden');
shootBtn.classList.add('hidden');
boomBtn.classList.add('hidden');
gunFlagOut.classList.add('hidden');
manholeImg.classList.add('hidden');

deadpool.classList.add('hidden');
deadpool.classList.add('jump-bg');

cloud1.addEventListener('animationend', hideClouds);
function hideClouds(){
    cloud1.classList.add('hidden');
    cloud2.classList.add('hidden');
    cloud3.classList.add('hidden');
    cloud4.classList.add('hidden');
    startBtn.classList.add('wiggle-btn');
};

startBtn.addEventListener('click', changeBg);
function changeBg(){
    mainContainer.classList.add('change-bg');
    title.classList.add('fadeout');
    startbutton.classList.add('fadeout');
    title.addEventListener('animationend', function(){
        title.classList.add('hidden');
        startbutton.classList.add('hidden');
        manholeImg.classList.remove('hidden');
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
    });
};

/*window.addEventListener('load', carFly);
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

};*/


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



graffitybtn.addEventListener('click', selfieZoom);
function selfieZoom () {
    selfieBG.classList.remove('hidden');
    deadpool.classList.add('zoomselfie');
}
selfieFinshed.addEventListener('click', backFromSelfie);
function backFromSelfie () {
    deadpool.classList.remove('zoomselfie')
deadpool.classList.add('zoomselfiedone');
}

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
    mainContainer.classList.add('hidden');
setTimeout(function(){
        credits.classList.remove('hidden')
explosionVideo.classList.add('hidden');
}, 5000);
};
