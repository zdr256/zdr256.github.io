let X = 200
let Y = 200

const R = 100
let r = R/2
let thetha =0
let alf
let e

let G = 10
let d

function setup() {
  createCanvas(777,777)
  background(220)
  
  X = width/2
  Y = height/2
  
  d =PI*(2/3)
  alf = -PI/2
  e = (2.71828)
}







let gx = 0
let gy = 0
function rr(){
  gx = cos(thetha+alf)*R
  gy = sin(thetha+alf)*R
  thetha+=d
  thetha%=2*PI
}
let beta = 0
function draw() {
  //ckground(100)
  
  if(abs(thetha/d)<1) fill(255,0,0);
  if(abs(thetha/d-1)<1) fill(0,255,0);
  if(abs(thetha/d-2)<1) fill(0,0,255);
  
  if(abs(thetha/d)<1) stroke(255,0,0);
  if(abs(thetha/d-1)<1) stroke(0,255);
  if(abs(thetha/d-2)<1)stroke(0,0,255);
  
  rr()
  beta+=0.01
  alf+=0.025
  
  let fx,fy
  fx = cos(beta)*r
  fy = sin(beta)*r
  
  stroke(0)
  for(let i=0;i<365;i+=0.11*e)
  {
    point(X+fx*i,Y+fy*i)
  }
  
  circle(X+gx,Y+gy,r)
  circle(X,Y,r)
  
  
}