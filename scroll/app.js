(function($) {
    
    
    /* Section 1 */

  $('#section-1').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {
      
var penner = anime.timeline();
penner
  .add({
    targets: '#penner .linear', translateX: 250, offset: 0,
    easing: 'linear'
  })
  .add({
    targets: '#penner .InQuad', translateX: 250, offset: 0,
    easing: 'easeInQuad'
  })
  .add({
    targets: '#penner .InCubic', translateX: 250, offset: 0,
    easing: 'easeInCubic'
  })
  .add({
    targets: '#penner .InQuart', translateX: 250, offset: 0,
    easing: 'easeInQuart'
  })
  .add({
    targets: '#penner .InQuint', translateX: 250, offset: 0,
    easing: 'easeInQuint'
  })
  .add({
    targets: '#penner .InSine', translateX: 250, offset: 0,
    easing: 'easeInSine'
  })
  .add({
    targets: '#penner .InExpo', translateX: 250, offset: 0,
    easing: 'easeInExpo'
  })
  .add({
    targets: '#penner .InCirc', translateX: 250, offset: 0,
    easing: 'easeInCirc'
  })
  .add({
    targets: '#penner .InBack', translateX: 250, offset: 0,
    easing: 'easeInBack'
  })
  .add({
    targets: '#penner .OutQuad', translateX: 250, offset: 0,
    easing: 'easeOutQuad'
  })
  .add({
    targets: '#penner .OutCubic', translateX: 250, offset: 0,
    easing: 'easeOutCubic'
  })
  .add({
    targets: '#penner .OutQuart', translateX: 250, offset: 0,
    easing: 'easeOutQuart'
  })
  .add({
    targets: '#penner .OutQuint', translateX: 250, offset: 0,
    easing: 'easeOutQuint'
  })
  .add({
    targets: '#penner .OutSine', translateX: 250, offset: 0,
    easing: 'easeOutSine'
  })
  .add({
    targets: '#penner .OutExpo', translateX: 250, offset: 0,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '#penner .OutCirc', translateX: 250, offset: 0,
    easing: 'easeOutCirc'
  })
  .add({
    targets: '#penner .OutBack', translateX: 250, offset: 0,
    easing: 'easeOutBack'
  })
  .add({
    targets: '#penner .InOutQuad', translateX: 250, offset: 0,
    easing: 'easeInOutQuad'
  })
  .add({
    targets: '#penner .InOutCubic', translateX: 250, offset: 0,
    easing: 'easeInOutCubic'
  })
  .add({
    targets: '#penner .InOutQuart', translateX: 250, offset: 0,
    easing: 'easeInOutQuart'
  })
  .add({
    targets: '#penner .InOutQuint', translateX: 250, offset: 0,
    easing: 'easeInOutQuint'
  })
  .add({
    targets: '#penner .InOutSine', translateX: 250, offset: 0,
    easing: 'easeInOutSine'
  })
  .add({
    targets: '#penner .InOutExpo', translateX: 250, offset: 0,
    easing: 'easeInOutExpo'
  })
  .add({
    targets: '#penner .InOutCirc', translateX: 250, offset: 0,
    easing: 'easeInOutCirc'
  })
  .add({
    targets: '#penner .InOutBack', translateX: 250, offset: 0,
    easing: 'easeInOutBack'
  });
      };
    }
  

    
    
            


    
    /* Section 2 */
    
    

    if (isInView) {
          $('#section-2').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation'); 
 }
        


    
    /* Section 3 */
    
  $('#section-3').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

    // This function runs every time the button is clicked
    var playPause = anime({
  targets: '#playPause .el',
  translateX: 250,
  delay: function(el, i, l) { return i * 100; },
  direction: 'alternate',
  loop: true,
  autoplay: false
});

document.querySelector('#playPause .play').onclick = playPause.play;
document.querySelector('#playPause .pause').onclick = playPause.pause;
      
    $('#section-3 button').click(function() {
      buttonPress.play();
       
            // This function runs every time the button is clicked
    var playPause = anime({
  targets: '#playPause .el',
  translateX: 250,
  delay: function(el, i, l) { return i * 100; },
  direction: 'alternate',
  loop: true,
  autoplay: false
        
    });
  });
      
      
      
      

  $('#section-4').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
  });

  $('#section-5').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
  });

})(jQuery);


})


/* Section 4 */




/* Section 3 */






/* Section 2 */

//var cssProperties = anime({
//  targets: '#cssProperties .el',
//  opacity: .5,
//  left: '240px',
//  backgroundColor: '#FFF',
//  borderRadius: ['0em', '2em'],
//  easing: 'easeInOutQuad'
//});


/* Section 1 */

//var penner = anime.timeline();
//penner
//  .add({
//    targets: '#penner .linear', translateX: 250, offset: 0,
//    easing: 'linear'
//  })
//  .add({
//    targets: '#penner .InQuad', translateX: 250, offset: 0,
//    easing: 'easeInQuad'
//  })
//  .add({
//    targets: '#penner .InCubic', translateX: 250, offset: 0,
//    easing: 'easeInCubic'
//  })
//  .add({
//    targets: '#penner .InQuart', translateX: 250, offset: 0,
//    easing: 'easeInQuart'
//  })
//  .add({
//    targets: '#penner .InQuint', translateX: 250, offset: 0,
//    easing: 'easeInQuint'
//  })
//  .add({
//    targets: '#penner .InSine', translateX: 250, offset: 0,
//    easing: 'easeInSine'
//  })
//  .add({
//    targets: '#penner .InExpo', translateX: 250, offset: 0,
//    easing: 'easeInExpo'
//  })
//  .add({
//    targets: '#penner .InCirc', translateX: 250, offset: 0,
//    easing: 'easeInCirc'
//  })
//  .add({
//    targets: '#penner .InBack', translateX: 250, offset: 0,
//    easing: 'easeInBack'
//  })
//  .add({
//    targets: '#penner .OutQuad', translateX: 250, offset: 0,
//    easing: 'easeOutQuad'
//  })
//  .add({
//    targets: '#penner .OutCubic', translateX: 250, offset: 0,
//    easing: 'easeOutCubic'
//  })
//  .add({
//    targets: '#penner .OutQuart', translateX: 250, offset: 0,
//    easing: 'easeOutQuart'
//  })
//  .add({
//    targets: '#penner .OutQuint', translateX: 250, offset: 0,
//    easing: 'easeOutQuint'
//  })
//  .add({
//    targets: '#penner .OutSine', translateX: 250, offset: 0,
//    easing: 'easeOutSine'
//  })
//  .add({
//    targets: '#penner .OutExpo', translateX: 250, offset: 0,
//    easing: 'easeOutExpo'
//  })
//  .add({
//    targets: '#penner .OutCirc', translateX: 250, offset: 0,
//    easing: 'easeOutCirc'
//  })
//  .add({
//    targets: '#penner .OutBack', translateX: 250, offset: 0,
//    easing: 'easeOutBack'
//  })
//  .add({
//    targets: '#penner .InOutQuad', translateX: 250, offset: 0,
//    easing: 'easeInOutQuad'
//  })
//  .add({
//    targets: '#penner .InOutCubic', translateX: 250, offset: 0,
//    easing: 'easeInOutCubic'
//  })
//  .add({
//    targets: '#penner .InOutQuart', translateX: 250, offset: 0,
//    easing: 'easeInOutQuart'
//  })
//  .add({
//    targets: '#penner .InOutQuint', translateX: 250, offset: 0,
//    easing: 'easeInOutQuint'
//  })
//  .add({
//    targets: '#penner .InOutSine', translateX: 250, offset: 0,
//    easing: 'easeInOutSine'
//  })
//  .add({
//    targets: '#penner .InOutExpo', translateX: 250, offset: 0,
//    easing: 'easeInOutExpo'
//  })
//  .add({
//    targets: '#penner .InOutCirc', translateX: 250, offset: 0,
//    easing: 'easeInOutCirc'
//  })
//  .add({
//    targets: '#penner .InOutBack', translateX: 250, offset: 0,
//    easing: 'easeInOutBack'
//  });