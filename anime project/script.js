var button = document.querySelector('#animateBtn');

button.addEventListener('click', function() {

    anime({
        targets: '.red',
        translateY: [
            { value: 200, duration: 500 },
            { value: 0, duration: 800 }
        ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        }
    });

    anime({
        targets: '.blue',
        
    translateY: [
            { value: 200, duration: 500 },
            { value: 0, duration: 800 }
    ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        },
        delay: 1000
    });

    anime({
        targets: '.green',
        translateY: [
            { value: 200, duration: 500 },
            { value: 0, duration: 800 }
        ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        },
        delay: 2000
    });

    anime({
        targets: '.yellow',
        translateY: [
            { value: 200, duration: 500 },
            { value: 0, duration: 800 }
        ],
        rotate: {
            value: '1turn',
            easing: 'easeInOutSine'
        },
        delay: 3000
    });

});