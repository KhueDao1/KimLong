








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

  