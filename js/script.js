window.addEventListener('load', function() {
    let scrollDown = document.getElementById("ct-js-btn-scroll");
    let mainHeaderContainer = document.getElementById("main-header-container");
    // console.log(mainHeaderContainer);

    // Element size
    let offsetHeight = mainHeaderContainer.offsetHeight;
    console.log("mainHeaderContainer offsetHeight = " + offsetHeight);

    window.addEventListener('resize', evt => {
        console.log(evt.target.innerHeight);

        offsetHeight = evt.target.innerHeight;

        console.log("offsetHeight = " + offsetHeight);

        // Scroll on click effect
        scrollDown.myParam = offsetHeight;
        console.log("scrollDown.myParam = "+ scrollDown.myParam);
        function myScrollDown(evt) {
            Velocity(document.body, 'scroll', {
                offset: evt.target.myParam
            }, {
                easing: 'ease-out',
                duration: '500'
            });
        }
        scrollDown.addEventListener('click', myScrollDown, false);

    });

});
