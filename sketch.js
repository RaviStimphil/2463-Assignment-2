
let u = 9;
let paintColor = [0,0,0];
  

function setup() {
  createCanvas(600, 400);
  let paintColor = [0,0,0];
  let u = 9;
  
}

function draw() {
  
  stroke(255);
  strokeWeight(1);
  paintSquare(0,0,255,0,0);
  paintSquare(0,20,255,125,0);
  paintSquare(0,40,255,255,0);
  paintSquare(0,60,0,255,0);
  paintSquare(0,80,0,255,255);
  paintSquare(0,100,0,0,255);
  paintSquare(0,120,255,0,255);
  paintSquare(0,140,150,100,0);
  paintSquare(0,160,255,255,255);
  paintSquare(0,180,0,0,0);
 
  fill(paintColor[0],paintColor[1],paintColor[2]);
  rect(u,200,40);

  
  
}

function mouseDragged(){
  stroke(paintColor[0],paintColor[1],paintColor[2]);
  strokeWeight(5);
  line(pmouseX,pmouseY,mouseX,mouseY);
}

function paintSquare (x,y,red,green,blue){
  fill(red, green, blue);
  square(x,y,20);
  
  if(mouseIsPressed && mouseX>x && mouseX<x+20 && mouseY>y && mouseY<y+20){
    paintColor = [red,green,blue];
  }
  

}

/*
let read = new paintSquare(0,0,255,0,0);
  let orage = new paintSquare(0,20,255,125,0);
  let yello = new paintSquare(0,40,255,255,0);
  let gren = new paintSquare(0,60,0,255,0);
  let can = new paintSquare(0,80,0,255,255);
  let lue = new paintSquare(0,100,0,0,255);
  let pik = new paintSquare(0,120,255,0,255);
  let brow = new paintSquare(0,140,150,100,0);
  let whit = new paintSquare(0,160,255,255,255);
  let back = new paintSquare(0,180,0,0,0);
  class paintSquare {
    constructor(x,y,red,green,blue){
      this.x = x
      this.y = y;
      this.red = red;
      this.green = green;
      this.blue = blue;
    }
    paintVisual(){
      fill(red, green, blue);
      square(x,y,20);
    }
    paintSelect(){
      if(mouseX>x && mouseX<x+20 && mouseY>y && mouseY<y+20){
        paintColor = [red,green,blue];
      }
    }
    
  }
  */
