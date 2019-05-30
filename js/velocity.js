// Without using jQuery
// velocity.js V1 only
// In Velocity V2 there are no longer any transform shortcuts such as translateX
// https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js

window.addEventListener('load', function() {

    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let section2 = document.getElementById('section2');

    function myVelocity() {
        // 800ms duration
        // Velocity(box2,'callout.shake', 800);
        Velocity(box2,'transition.slideLeftIn', 800);
        Velocity(box3,'transition.slideRightIn', 2000);
    }



    let scrollLock = false;
    window.addEventListener('scroll', function() {

        if (!scrollLock) {
            let clientY = section2.getBoundingClientRect().top;
            // console.log("clientY = " + clientY);
            if (clientY < 10) {
                // console.log("Show boxes!! yahhhh");
                // Do something with the boxes
                box2.classList.add('moveRight');
                box3.classList.add('moveLeft');

                scrollLock = true;
            }
        } else {
            let clientY = section2.getBoundingClientRect().top;
            if (clientY > 350) {
                // Do something with the boxes
                box2.classList.remove('moveRight');
                box3.classList.remove('moveLeft');
                scrollLock = false;
            }
        }



    }, false);

});
