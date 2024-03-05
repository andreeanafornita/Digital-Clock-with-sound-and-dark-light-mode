let section = document.querySelector("section"),
icons = document.querySelector(".icons");
icons.onclick = ()=>{
  section.classList.toggle("dark");
}
function toggleDarkMode() {
  section.classList.toggle("dark");
}

// Event listener for the sun icon click
icons.onclick = toggleDarkMode;

let userInteracted = false;

document.addEventListener('click', () => {
  userInteracted = true;
});

function playYourSound() {
  const audio = document.getElementById('yourAudio');
  audio.play();
}

function updateClock() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const d = hour < 12 ? "AM" : "PM";
  let formattedHour = hour % 12 || 12; // Ensure 12-hour format, handle 0 as 12

  const hourString = formattedHour < 10 ? "0" + formattedHour : formattedHour;
  const minString = min < 10 ? "0" + min : min;
  const secString = sec < 10 ? "0" + sec : sec;
  document.querySelector(".hour_num").innerText = hourString;
  document.querySelector(".min_num").innerText = minString;
  document.querySelector(".sec_num").innerText = secString;
  document.querySelector(".am_pm").innerText = d;

  if (userInteracted) {
    playYourSound();
  }
}

setInterval(updateClock, 1000);

window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();
function drawStarryBackground() {
  const canvas = document.getElementById("starry-background");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 200; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 2;
    const opacity = Math.random() * 0.5 + 0.5;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fillStyle = `rgba(173, 216, 230)`;
    context.fill();
  }
}

// Call the drawStarryBackground function when the page loads
window.addEventListener("load", drawStarryBackground);

// You can call it on window resize if needed to adjust canvas size
window.addEventListener("resize", drawStarryBackground);

/* Basic Setup */
var bg = document.createElement( 'canvas' ),
    mg = document.createElement( 'canvas' ),
    fg = document.createElement( 'canvas' ),
    ctxbg = bg.getContext( '2d' ),
    ctxmg = mg.getContext( '2d' ),
    ctxfg = fg.getContext( '2d' ),
    cw = (bg.width = mg.width = fg.width = window.innerWidth),
    ch = (bg.height = mg.height = fg.height = window.innerHeight);
  
/* Background Gradient */
gradient = ctxbg.createRadialGradient( 100, 75, 1, 100, 75, cw );
gradient.addColorStop(0, '#fad797');
gradient.addColorStop(0.1, '#ebb44f');
gradient.addColorStop(0.3, '#9b4b34');
gradient.addColorStop(0.5, '#4e2835');
gradient.addColorStop(0.6, '#361e36');
gradient.addColorStop(0.9, '#271a36');
gradient.addColorStop(1, '#0b0a22');
ctxbg.fillStyle = gradient;
ctxbg.fillRect( 0, 0, cw, ch);

for( var x = 0; x < cw; x++ ){
  for( var y = 0; y < ch; y++ ){
    ctxbg.fillStyle = 'hsla(0, 0%, ' + Math.random() * 100 + '%, ' + Math.random() / 40 + ')';
    ctxbg.fillRect(x, y, 1, 1);
  }
}

function loop(){
  requestAnimationFrame( loop );

  ctxmg.globalCompositeOperation = 'destination-out';
  ctxmg.fillStyle = 'rgba(0, 0, 0, .1)';
  ctxmg.fillRect( 0, 0, cw, ch );
  ctxmg.globalCompositeOperation = 'lighter';
 
  /* Sun */
  ctxmg.beginPath();
  ctxmg.arc( 100 + Math.random() * 2, 75 + Math.random() * 2, 50 + Math.random() * 10, 0, Math.PI * 2);
  ctxmg.fillStyle = 'rgba(255, 249, 21, 0.8)';
  ctxmg.fill();
}

/* Append Canvases */
document.body.appendChild( bg );
document.body.appendChild( mg );
document.body.appendChild( fg );

loop();