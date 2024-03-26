$(".click1").click(function(){
  $(".dragon").toggleClass("hide");
});

$( function () {
  $(".draggable").draggable();
});

$(".click2").click(function(){
  $(".letter").toggleClass("hide");
});
$(".off").click(function(){
  $(".photo1").toggleClass("hide");
});
$(".off2").click(function(){
  $(".photo1").toggleClass("pulse");
});
$(".off3").click(function(){
  $(".photo1").toggleClass("rotate");
});
$(".off4").click(function(){
  $(".photo1").removeClass("rotate pulse hide");
});




// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


window.addEventListener ( 'resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
  })

  // loop animation
let animationId;
function animate() {
  animationId = requestAnimationFrame(animate); 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.x = mouse.x;
  player.y = mouse.y;
  player.update();
  // select each ball and animate
  balls.forEach ((ball, index) => {
    ball.update();
  });
};

  