(function($) {

  $('#section-1').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {
      anime({
        targets: '.box',
        translateX: function() { return anime.random(-50, 50) + 'vw'; },
        translateY: function() { return anime.random(-50, 50) + 'vh'; },
        scale: function() { return anime.random(10,30) / 10; },
        rotate: function() { return anime.random(-360,360); },
        duration: function() { return anime.random(1000,2000); },
        easing: 'easeOutQuad',
        // direction: 'alternate',
        loop: false,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        },
        begin: function(anim) {
          $(event.target).find('.log h1').html('Started');
        },
        complete: function(anim) {
          $(event.target).find('.log h1').html('Completed');
        }
      });
    }
  });

  $('#section-2').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
    if (isInView) {

      var basicTimeline = anime.timeline({
        direction: 'alternate',
        loop: 3,
        elasticity: 350
      });
      basicTimeline.begin = function(anim) {
        $(event.target).find('.log h1').html('Started');
      };
      basicTimeline.complete = function(anim) {
        $(event.target).find('.log h1').html('Completed');
        $(event.target).find('.log h5').html('100%');
      };
      basicTimeline.run = function(anim) {
        $(event.target).find('.log h5').html(Math.round(anim.progress) + '%');
      }
      basicTimeline
        .add({
          targets: '.button',
          duration: 800,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 20,
          width: 20,
          opacity: 1,
          duration: 1,
        })
        .add({
          targets: '.progress-bar',
          duration: 800,
          width: 500,
          elasticity: 350
        })
        .add({
          targets: '.button',
          duration: 300,
          height: 20,
          width: 500,
          backgroundColor: '#2B2D2F',
          border: '0',
          borderRadius: 100
        })
        .add({
          targets: '.progress-bar',
          height: 80,
          duration: 300,
          width: 500,
          elasticity: 350
        })
    }
  });

  $('#section-3').on('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');

    // This function runs every time the button is clicked
    var buttonPress = anime({
      autoplay: false,
      backgroundColor: '#FF4477',
      targets: '#section-3 button',
      scale: 0.5,
      loop: 1,
      duration: 200,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      complete: function() {
        buttonPress.reset();
      }
    });
    $('#section-3 button').click(function() {
      buttonPress.play();
    });
  });

  $('#section-4').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
  });

  $('#section-5').one('inview', function(event, isInView) {
    $(event.target).addClass('run-animation');
  });

})(jQuery);





/* Section 4 */

anime({
  targets: 'path',
  strokeDashoffset: function(el) {
    var pathLength = el.getTotalLength();
    el.setAttribute('stroke-dasharray', pathLength);
    return [-pathLength, 0];
  },
  stroke: {
    value: function(el, i) {
      return 'rgb(200,'+ i * 8 +',150)'; 
    },
    easing: 'linear',
    duration: 2000,
  },
  strokeWidth: {
    value: 6,
    easing: 'linear',
    delay: function(el, i) { 
      return 1200 + (i * 40); 
    },
    duration: 800,
  },
  delay: function(el, i) { 
    return i * 60; 
  },
  duration: 1200,
  easing: 'easeOutExpo',
  loop: true,
  direction: 'alternate'
});


/* Section 3 */


var seekAnim = anime({
  targets: '#seekAnim .el',
  translateX: 250,
  delay: function(el, i, l) { return i * 100; },
  elasticity: 200,
  autoplay: false
});

var seekProgressEl = document.querySelector('#seekAnim .progress');

seekProgressEl.addEventListener('input', function() { 
  seekAnim.seek(seekAnim.duration * (seekProgressEl.value / 100));
});

['input','change'].forEach(function(evt) {
  seekProgressEl.addEventListener(evt, function() { 
    seekAnim.seek(seekAnim.duration * (seekProgressEl.value / 100));
  });
});


/* Section 2 */







/* Section 1 */

window.human = false;

var canvasEl = document.querySelector('.fireworks');
var ctx = canvasEl.getContext('2d');
var numberOfParticules = 30;
var pointerX = 0;
var pointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

function setCanvasSize() {
  canvasEl.width = window.innerWidth * 2;
  canvasEl.height = window.innerHeight * 2;
  canvasEl.style.width = window.innerWidth + 'px';
  canvasEl.style.height = window.innerHeight + 'px';
  canvasEl.getContext('2d').scale(2, 2);
}

function updateCoords(e) {
  pointerX = e.clientX || e.touches[0].clientX;
  pointerY = e.clientY || e.touches[0].clientY;
}

function setParticuleDirection(p) {
  var angle = anime.random(0, 360) * Math.PI / 180;
  var value = anime.random(50, 180);
  var radius = [-1, 1][anime.random(0, 1)] * value;
  return {
    x: p.x + radius * Math.cos(angle),
    y: p.y + radius * Math.sin(angle)
  }
}

function createParticule(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = colors[anime.random(0, colors.length - 1)];
  p.radius = anime.random(16, 32);
  p.endPos = setParticuleDirection(p);
  p.draw = function() {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  return p;
}

function createCircle(x,y) {
  var p = {};
  p.x = x;
  p.y = y;
  p.color = '#FFF';
  p.radius = 0.1;
  p.alpha = .5;
  p.lineWidth = 6;
  p.draw = function() {
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
    ctx.lineWidth = p.lineWidth;
    ctx.strokeStyle = p.color;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  return p;
}

function renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw();
  }
}

function animateParticules(x, y) {
  var circle = createCircle(x, y);
  var particules = [];
  for (var i = 0; i < numberOfParticules; i++) {
    particules.push(createParticule(x, y));
  }
  anime.timeline().add({
    targets: particules,
    x: function(p) { return p.endPos.x; },
    y: function(p) { return p.endPos.y; },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule
  })
    .add({
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(600, 800),  
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: renderParticule,
    offset: 0
  });
}

var render = anime({
  duration: Infinity,
  update: function() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }
});

document.addEventListener(tap, function(e) {
  window.human = true;
  render.play();
  updateCoords(e);
  animateParticules(pointerX, pointerY);
}, false);

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
  if (window.human) return;
  animateParticules(
    anime.random(centerX-50, centerX+50), 
    anime.random(centerY-50, centerY+50)
  );
  anime({duration: 200}).finished.then(autoClick);
}

autoClick();
setCanvasSize();
window.addEventListener('resize', setCanvasSize, false);