const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score=0
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(900,250,300,20);
    ground1 = new Ground(100,100)

    box1 = new Box(800,170,40,40);
    box2 = new Box(840,170,40,40);

    box3 = new Box(880,170,40,40);
    box4 = new Box(920,170,40,40);
    box5 = new Box(960,170,40,40);
    box6 = new Box(1000,170,40,40);
    box7 = new Box(840,130,40,40);
    box8 = new Box(880,130,40,40);
    box9 = new Box(920,130,40,40);
    box10 = new Box(960,130,40,40);
    box11 = new Box(880,90,40,40);
    box12 = new Box(920,90,40,40);

    bird = new Bird(100,170,50,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:100, y:50});
}

function draw(){
    
        background('orange');
        noStroke();
        textSize(35)
        
        text("Score  " + score, width-300, 50)
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()
    box7.score()
    box8.score()
    box9.score()
    box10.score();
    box11.score()
    box12.score()
    ground.display();
    box2.display();

    box3.display();
    box4.display();
    box5.display();
      box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();


    box11.display();
    box12.display();
    bird.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        
      
        slingshot.attach(bird.body);
      
    }


}
