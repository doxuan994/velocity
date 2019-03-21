window.addEventListener('load', function() {
    let scrollDown = document.getElementById("ct-js-btn-scroll");
    // console.log(scrollDown);

    function myScrollDown() {
        // console.log("My scroll down worked!");
        Velocity(document.body, 'scroll', {
            offset: '722'
        }, {
            easing: 'ease-out',
            duration: '500'
        });
    }

    scrollDown.addEventListener('click', myScrollDown, false);
});
