// anime({
//     targets: 'div.box.red',
//     translateY: [{
//         value: 200,
//         duration: 500
//     }, {
//         value: 0,
//         duration: 500
//     }],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine'
//     }

// })
// anime({
//     targets: 'div.box.blue',
//     translateY: [{
//         value: 200,
//         duration: 500,
//         delay:1000
//     }, {
//         value: 0,
//         duration: 500
//     }],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay:1000
//     }

// })
// anime({
//     targets: 'div.box.green',
//     translateY: [{
//         value: 200,
//         duration: 500,
//         delay: 2000
//     }, {
//         value: 0,
//         duration: 500
//     }],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 2000
//     }

// })
// anime({
//     targets: 'div.box.black',
//     translateY: [{
//         value: 200,
//         duration: 500,
//         delay: 3000
//     }, {
//         value: 0,
//         duration: 500
//     }],
//     rotate: {
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 3000
//     }

// })



var playPause = anime({
    targets: 'div.box', // define the elements or js objects to animate target type ma css selectors :'div' ,'.item' etc
    translateY: [{
        value: 200,
        duration: 500
    }, {
        value: 0,
        duration: 500
    }],
    rotate: {
        value: '1turn',   //rotation  1 turn garne
        easing: 'easeInOutSine'
    },
    delay: function(target, index) {
        return index * 1000
    },
    autoplay: false,
    loop: true // animation parameter ho jun chai related to animation to show no loops
})

document.querySelector('#boxes .play').onclick = playPause.play // boxes id bhitra ko play bhanney class lai selector 
document.querySelector('#boxes .pause').onclick = playPause.pause // yo pani target ko type document.queryselector(.'item' or div element haru bhaneko hai )