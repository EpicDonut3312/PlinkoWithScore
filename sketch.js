var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var plinkos = [];
var divisions =[];
var divisionHeight=300;
var particle;
var score =0;
var turn = 0;
var gameState = "play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  border = new Ground(0,400,10,800)
  border1= new Ground(800,400,10,800)

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

 
  
    
}
 


function draw() {
  background("black");
  textSize(20)

  text("SCORE"+ score, 400,20)
  text("500", 10 , 550)
  text("750", 90 , 550)
  text("1000", 170 , 550)
  text("500", 250 , 550)
  text("750", 330 , 550)
  text("1000", 410 , 550)
  text("500", 490 , 550)
  text("750", 580 , 550)
  text("1000", 660 , 550)
  text("500", 740  , 550)


  Engine.update(engine);
  ground.display();
  border.display();
  border1.display();
 
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(particle!= null){
    particle.display()
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500
        particle = null;
        if(turn>=5){
          gameState="end";
        }
      }
      else if(particle.body.position.x>301&&particle.body.position.x<600){
        score=score+750
        particle = null;
        if(turn>=5){
          gameState="end";
        }
      }

      else if(particle.body.position.x>601 && particle.body.position.x<900){
        score=score+1000
        particle = null;
        if(turn>=5){
          gameState="end";
        }
      } 
    }
  }
 /* if(frameCount%60===0){
    particles.push(new Particles (random(0,800),10))
  }

  //display the paricles 
 for (var e = 0; e<particles.length; e++){
   particles[e].display();
 }*/

}


function mouseReleased(){
if(gameState==="play"){
  turn++
  particle = new Particles(mouseX,10)  
}
 

}

