/* CANVAS SIZE */
var pcanvas = 800
var lcanvas = 600

/* CENTER OF CANVAS SIZE */
var x = pcanvas/2
var y = lcanvas/2
//var bola

function setup()
{
  //bola = new ball(x,y)
  createCanvas(pcanvas,lcanvas);
  background(0);
}

function draw()
{
  //y+=velo
  //y+=velo
  //ball.drawn()
  background(0);
  // cursor(TIPE, X, Y)
  // VALID TIPE CURSOR IS
  // ARROW, CROSS, HAND, MOVE, WAIT, TEXT
  //canvasElement.style.cursor = "none"
  //cursor(HAND)
  //ew = ellipse(x,y, 20,20)
  fill(color(255,255,0));
  //      posisi x, posisi y, width, height
  rect(mouseX - 20.5, mouseY, 15,3)
  rect(mouseX + 5.5, mouseY, 15,3)
  rect(mouseX, mouseY - 20.5, 3, 15)
  rect(mouseX, mouseY + 5.5, 3, 15)

  if(mouseIsPressed)
  {
    background(0)
    fill(color(255,0,0))
    ellipse(mouseX,mouseY,7,7)
  }
}
  /*if(y>=lcanvas)
  {
    velo *= -1/2
  }
  else if (y<=lcanvas/2) {
    velo *= 1/2
  }
  ellipse(x,y,90,90);
  */
  // (statement ? benar : salah)

/*function ball(x,y)
{
  this.x = x;
  this.y = y;
  this.die = false
  this.del = function()
  {
    this.die = true
  }
  this.drawn = function()
  {
    if(!this.die)
    {
      //background(0)
      fill(color(255,0,0))
      ellipse(this.x,this.y,90,90)
    }
  }
*/
