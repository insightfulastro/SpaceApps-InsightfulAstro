
let AU = 1000;
let AUChange = 400;



let mercury = {
    
  radius: 0.387706053 * AU,
  x: 100000,
  y: 100000,
  size: 11.4755409 * (AU / AUChange),
  angle: 2.618

};

let venus = {
    
  radius: 0.727082541 * AU,
  x: 100000,
  y: 100000,
  size: 28.466604 * (AU / AUChange),
  angle: 1.013

};

let earth = {
  
  radius: 1 * AU,
  x: 100000,
  y: 100000,
  size: 30 * (AU / AUChange),
  angle: 0
  
};

let mars = {
  
  radius: 1.52408586 * AU,
  x: 100000,
  y: 100000,
  size: 15.8605016 * (AU / AUChange),
  angle: 3.342
  
};

let jupiter = {
  
  radius: 5.20060878 * AU,
  x: 100000,
  y: 100000,
  size: 8 * earth.size,
  angle: 5.284
  
};

let saturn = {
  
  radius: jupiter.radius * 1.8,
  x: 100000,
  y: 100000,
  size: jupiter.size * 0.84,
  angle: 4.365
  
};

let uranus = {
  
  radius: jupiter.radius * 3.6538,
  x: 100000,
  y: 100000,
  size: jupiter.size * 0.35 * 3,
  angle: 2.452
  
};

let neptune = {
  
  radius: jupiter.radius * 5.7692,
  x: 100000,
  y: 100000,
  size: jupiter.size * 0.346346 * 3,
  angle: 1.047
  
};

let SunX, SunY;
let SunSize;
let radius = 150;
let angle = 0;
let angularVelocity = 0.0005;
let scaleFactor = 0.5;
let zoomSpeed = 0.03;
let zoomDirection = 0;
let planetSize = 30;
let sZoomSpeed = 0;
let offsetX, offsetY;
let isMovingPlanet = false;
let pZoomSpeed = 0.05;

function preload() {
  sunImage = loadImage('media/theSmilingSun.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
    
  offsetX = width/2;
  offsetY = height/2;

  Sun = createDiv('');
  Sun.class('sun');
  
  // frame = select('.terran-borderContainer');
  
  
  planetMercury = select('#mercury-card');
  planetVenus = select('#venus-card');
  planetEarth = select('#earth-card');
  planetMars = select('#mars-card');
  planetJupiter = select('#jupiter-card');
  planetSaturn = select('#saturn-card');
  planetUranus = select('#uranus-card');
  planetNeptune = select('#neptune-card');
  
  
  
}

function draw() {
  
  
  SunSize = 70;
  
  //Translation to the planet
  if(isMovingPlanet){
    
    offsetX = width/2 - earth.x * scaleFactor;
    offsetY = height/2 - earth.y * scaleFactor;
    
    //Zooming in to the planet
    scaleFactor = lerp(scaleFactor, 5, pZoomSpeed);
    
  }
  
  //View stops following the planet
  /*if(abs(offsetX -(width/2 - planetX * scaleFactor)) < 1 && abs(offsetY -(height/2 - planetY * scaleFactor)) < 1){
    
    isMovingPlanet = false
    
  }*/
  
  //Sets scaling to the center of the canvas
  translate(offsetX, offsetY);
  scale(scaleFactor);  
  
  SunX = 0;
  SunY = 0;
  
  background(0, 0, 0);
  
  
  //ellipse(300, 50, 30, 30);

  stroke(255, 255, 255);

  noFill();

  strokeWeight(3);
  
  //Orbit of Earth
  stroke(0, 0, 255);
  ellipse(SunX, SunY, earth.radius * 2, earth.radius * 2);
  
  //Orbit of Mercury
  stroke(80);
  ellipse(SunX, SunY, mercury.radius * 2, mercury.radius * 2);
  
  //Orbit of Venus
  stroke(255,255,204);
  ellipse(SunX, SunY, venus.radius * 2, venus.radius * 2);
  
  //Orbit of Mars
  stroke(192, 95, 65);
  ellipse(SunX, SunY, mars.radius * 2, mars.radius * 2);
  
  strokeWeight(20);
  
  //Orbit of Jupiter
  stroke(192,141, 65);
  ellipse(SunX, SunY, jupiter.radius * 2, jupiter.radius * 2);
  
  //Orbit of Saturn
  stroke(236, 195, 114);
  ellipse(SunX, SunY, saturn.radius * 2, saturn.radius * 2); 
  
  strokeWeight(40);
  
  //Orbit of Uranus
  stroke(102, 255, 178);
  ellipse(SunX, SunY, uranus.radius * 2, uranus.radius * 2);
  
  //Orbit of Neptune
  stroke(0, 0, 255);
  ellipse(SunX, SunY, neptune.radius * 2, neptune.radius * 2);
  
  noStroke();

  //Circular position of the Mercury
  mercury.x = SunX + cos(mercury.angle) * mercury.radius;
  mercury.y = SunY + sin(mercury.angle) * mercury.radius;
  
  //Circular position of the Venus
  venus.x = SunX + cos(venus.angle) * venus.radius;
  venus.y = SunY + sin(venus.angle) * venus.radius;  
  
  //Circular position of the Earth
  earth.x = SunX + cos(earth.angle) * earth.radius;
  earth.y = SunY + sin(earth.angle) * earth.radius;

  //Circular position of the Mars
  mars.x = SunX + cos(mars.angle) * mars.radius;
  mars.y = SunY + sin(mars.angle) * mars.radius;
  
  //Circular position of the Jupiter
  jupiter.x = SunX + cos(jupiter.angle) * jupiter.radius;
  jupiter.y = SunY + sin(jupiter.angle) * jupiter.radius;
  
  //Circular position of the Saturn
  saturn.x = SunX + cos(saturn.angle) * saturn.radius;
  saturn.y = SunY + sin(saturn.angle) * saturn.radius;
  
  //Circular position of the Uranus
  uranus.x = SunX + cos(uranus.angle) * uranus.radius;
  uranus.y = SunY + sin(uranus.angle) * uranus.radius;
  
  //Circular position of the Neptune
  neptune.x = SunX + cos(neptune.angle) * neptune.radius;
  neptune.y = SunY + sin(neptune.angle) * neptune.radius;
  
  //Mercury model
  fill(80);
  ellipse(mercury.x, mercury.y, mercury.size, mercury.size);

  //Venus model
  fill(255,255,204);
  ellipse(venus.x, venus.y, venus.size, venus.size);
  
  //Earth model
  fill(0, 0, 255, 255);
  ellipse(earth.x, earth.y, earth.size, earth.size);
  
  //Mars model
  fill(192, 95, 65);
  ellipse(mars.x, mars.y, mars.size, mars.size);
  
  //Jupiter model
  fill(192,141, 65);
  ellipse(jupiter.x, jupiter.y, jupiter.size, jupiter.size);
 
  //Saturn model
  fill(236, 195, 114);
  ellipse(saturn.x, saturn.y, saturn.size, saturn.size);
 
  //Uranus model
  fill(102, 255, 178);
  ellipse(uranus.x, uranus.y, uranus.size, uranus.size);
  
  //Neptune model
  fill(0, 0, 255);
  ellipse(neptune.x, neptune.y, neptune.size, neptune.size);
  
  //Sun
  fill(255, 255, 0);
  image(sunImage, SunX-SunSize/2, SunY-SunSize/2, SunSize, SunSize);
  
  
  
  //Orbital motion
  mercury.angle -= angularVelocity;
  venus.angle -= angularVelocity;
  earth.angle -= angularVelocity;
  mars.angle -= angularVelocity;
  jupiter.angle -= angularVelocity;
  saturn.angle -= angularVelocity;
  uranus.angle -= angularVelocity;
  neptune.angle -= angularVelocity;
  
  
  //Zooming in to the sun
  scaleFactor = lerp(scaleFactor, 5, sZoomSpeed);
    

  if(1/scaleFactor < 1 && 1/scaleFactor > 0){
     
      Sun.style('opacity', 1/scaleFactor/5);
     
     }
  else Sun.style('opacity', 1/scaleFactor/2);

  
}



//Zooming in and out by using mouse wheels
function mouseWheel(event){
  
  let adjustedZoomSpeed = zoomSpeed * (scaleFactor * 5);
  
  

  if(event.delta > 0){
    
    zoomDirection = -1;
    
  }
  if(event.delta === 0){
    
    zoomDirection = 0;
    
  }
  if(event.delta < 0){
    
    zoomDirection = 1;
    
  }
  
  scaleFactor += adjustedZoomSpeed * zoomDirection;
  scaleFactor = constrain(scaleFactor, 0.008, 5);
  
}

function mouseClicked(){
  let nmouseX = (mouseX - offsetX) / scaleFactor;
  let nmouseY = (mouseY - offsetY) / scaleFactor;

  //Mercury
    if (dist(nmouseX, nmouseY, mercury.x, mercury.y) < mercury.size * 2){

    planetMercury.style('display', 'flex');

    
  } else planetMercury.style('display', 'none');
  
  
  //Venus
    if (dist(nmouseX, nmouseY, venus.x, venus.y) < venus.size * 2){

    planetVenus.style('display', 'flex');

    
  } else planetVenus.style('display', 'none');
  
  //Earth
  if (dist(nmouseX, nmouseY, earth.x, earth.y) < earth.size * 2){

    planetEarth.style('display', 'flex');

    
  } else planetEarth.style('display', 'none');
  
  //Mars
    if (dist(nmouseX, nmouseY, mars.x, mars.y) < mars.size * 2){

    planetMars.style('display', 'flex');

    
  } else planetMars.style('display', 'none');
  
  //Jupiter
    if (dist(nmouseX, nmouseY, jupiter.x, jupiter.y) < jupiter.size * 2){

    planetJupiter.style('display', 'flex');

    
  } else planetJupiter.style('display', 'none');
  
  //Saturn
    if (dist(nmouseX, nmouseY, saturn.x, saturn.y) < saturn.size * 2){

    planetSaturn.style('display', 'flex');

    
  } else planetSaturn.style('display', 'none');
  
  //Uranus
    if (dist(nmouseX, nmouseY, uranus.x, uranus.y) < uranus.size * 2){

    planetUranus.style('display', 'flex');

    
  } else planetUranus.style('display', 'none');
  
  //Neptune
    if (dist(nmouseX, nmouseY, neptune.x, neptune.y) < neptune.size * 2){

    planetNeptune.style('display', 'flex');

    
  } else planetNeptune.style('display', 'none');
  
//  if (dist(nmouseX, nmouseY, SunX, SunY) < SunSize/2){

//     offsetX = width/2 - SunX * scaleFactor;
//     offsetY = height/2 - SunY * scaleFactor;

//     sZoomSpeed = 0.05;

//   }else{
            
//    sZoomSpeed = 0;
    
//   }
  
}
var buttonTop = document.getElementById('unshowButton');
  var buttonBottom = document.getElementById('showButton');
let frame = document.getElementById('terran-borderContainer');


function hidebutton1(){
  buttonTop.style.display = "block";
  buttonBottom.style.display = "none";
  frame.style.display = "block";  
}
function hidebutton2(){
  buttonTop.style.display = "none";
  buttonBottom.style.display = "flex";
  frame.style.display = "none";  
}
var mercuryInfo = document.getElementById('mercuryInfo');
var mercuryCard = document.getElementById('mercury-card');
var venusInfo = document.getElementById('venusInfo');
var venusCard = document.getElementById('venus-card');
var earthInfo = document.getElementById('earthInfo');
var earthCard = document.getElementById('earth-card');
var marsInfo = document.getElementById('marsInfo');
var marsCard = document.getElementById('mars-card');
var jupiterInfo = document.getElementById('jupiterInfo');
var jupiterCard = document.getElementById('jupiter-card');
var saturnInfo = document.getElementById('saturnInfo');
var saturnCard = document.getElementById('saturn-card');
var uranusInfo = document.getElementById('uranusInfo');
var uranusCard = document.getElementById('uranus-card');
var neptuneInfo = document.getElementById('neptuneInfo');
var neptuneCard = document.getElementById('neptune-card');


function mercuryInfoView(){
  mercuryInfo.style.display = 'block';
  mercuryCard.style.display = 'flex';
}
function hideMercuryInfo() {
  mercuryInfo.style.display = 'none';
  planetMercury.style('display', 'none'); 
}

function venusInfoView(){
  venusInfo.style.display = 'block';
  venusCard.style.display = 'flex';
}
function hideVenusInfo() {
  venusInfo.style.display = 'none';
  planetVenus.style('display', 'none'); 
}

function earthInfoView(){
  earthInfo.style.display = 'block';
  earthCard.style.display = 'flex';
}
function hideEarthInfo() {
  earthInfo.style.display = 'none';
  planetEarth.style('display', 'none'); 
}

function marsInfoView(){
  marsInfo.style.display = 'block';
  marsCard.style.display = 'flex';
}
function hideMarsInfo() {
  marsInfo.style.display = 'none';
  planetMars.style('display', 'none'); 
}

function jupiterInfoView(){
  jupiterInfo.style.display = 'block';
  jupiterCard.style.display = 'flex';
}
function hideJupiterInfo() {
  jupiterInfo.style.display = 'none';
  planetJupiter.style('display', 'none'); 
}

function saturnInfoView(){
  saturnInfo.style.display = 'block';
  saturnCard.style.display = 'flex';
}
function hideSaturnInfo() {
  saturnInfo.style.display = 'none';
  planetSaturn.style('display', 'none'); 
}

function uranusInfoView(){
  uranusInfo.style.display = 'block';
  uranusCard.style.display = 'flex';
}
function hideUranusInfo() {
  uranusInfo.style.display = 'none';
  planetUranus.style('display', 'none'); 
}

function neptuneInfoView(){
  neptuneInfo.style.display = 'block';
  neptuneCard.style.display = 'flex';
}
function hideNeptuneInfo() {
  neptuneInfo.style.display = 'none';
  planetNeptune.style('display', 'none'); 
}