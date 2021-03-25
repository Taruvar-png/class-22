const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var object_options =
    {
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,800,20,object_options);
    World.add(world,ground);
    var optionBall={
        restitution: 0.8
    }
    ball=Bodies.circle(400,100,40,optionBall);
    World.add(world,ball);

   


}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);
}
